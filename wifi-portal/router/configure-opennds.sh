#!/bin/sh

set -eu

if [ "$(id -u)" != "0" ]; then
  echo "Run this script as root on the OpenWrt router."
  exit 1
fi

if ! ip link show br-guest >/dev/null 2>&1; then
  echo "br-guest does not exist. Create and test the isolated Guest network first."
  exit 1
fi

if [ ! -f /tmp/mansion-splash.css ]; then
  echo "Upload mansion-splash.css to /tmp/mansion-splash.css before running this script."
  exit 1
fi

opkg update
opkg install opennds

backup_stamp="$(date +%Y%m%d-%H%M%S)"
cp /etc/config/opennds "/etc/config/opennds.before-mansion-${backup_stamp}"
if [ -f /etc/opennds/htdocs/splash.css ]; then
  cp /etc/opennds/htdocs/splash.css "/etc/opennds/htdocs/splash.css.before-mansion-${backup_stamp}"
fi

uci set opennds.@opennds[0].enabled='1'
uci set opennds.@opennds[0].gatewayinterface='br-guest'
uci set opennds.@opennds[0].gatewayname='Mansion WiFi'
uci set opennds.@opennds[0].enable_serial_number_suffix='0'
uci set opennds.@opennds[0].login_option_enabled='1'
uci set opennds.@opennds[0].maxclients='40'
uci set opennds.@opennds[0].preauthidletimeout='10'
uci set opennds.@opennds[0].authidletimeout='60'
uci set opennds.@opennds[0].sessiontimeout='720'
uci set opennds.@opennds[0].uploadrate='1000'
uci set opennds.@opennds[0].downloadrate='5000'
uci commit opennds

cp /tmp/mansion-splash.css /etc/opennds/htdocs/splash.css
chmod 0644 /etc/opennds/htdocs/splash.css

service opennds enable
service opennds restart

sleep 2
service opennds status
echo "Mansion WiFi captive portal is configured on br-guest."
