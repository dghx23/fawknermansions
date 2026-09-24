# Mansion WiFi captive portal

This kit turns the Cudy M1200 into a guest hotspot with a branded click-through portal. The design uses no remote fonts, scripts or images, so it remains fast and works inside the small captive-portal windows used by iPhone, Android, Windows and macOS.

The visual system is grounded in Fawkner Mansions itself: oxblood brick, bluestone blue-grey, cream render, restrained brass, the `FM` monogram, classical proportions and a tessellated-path motif. It reflects the building designed by Ernest H. Willis and constructed in 1910–11, while keeping the router-delivered page small and reliable.

## Target layout

```text
AH-GUEST (5 GHz backhaul / WAN)
                 |
              OpenWrt
        +--------+---------+
        |                  |
Admin LAN             Guest bridge
192.168.1.0/24         br-guest
cameras/devices        192.168.20.0/24
                       Mansion WiFi
                              |
                     openNDS portal
                              |
                         Internet only
```

Do not run the captive portal on `br-lan`. The existing LAN contains cameras and other devices. Guests need a separate bridge and firewall zone with no path to LAN.

## Before making changes

1. In LuCI, go to **System → Backup / Flash Firmware → Generate archive** and save a configuration backup.
2. Administer the router from Ethernet or the existing `OpenWrt` SSID while changing `Mansion WiFi`. Do not rely on the SSID you are reconfiguring.
3. Confirm the router itself can ping `192.168.96.1`, `8.8.8.8`, and `openwrt.org` under **Network → Diagnostics**.

## 1. Create the isolated guest network in LuCI

Go to **Network → Interfaces → Add new interface**:

- Name: `guest`
- Protocol: **Static address**
- Device: create a bridge called `br-guest`
- IPv4 address: `192.168.20.1`
- Netmask: `255.255.255.0`
- DHCP server: enabled, range `192.168.20.100–249`

Under the new interface's **Firewall Settings**, create or select a zone called `guest`:

- Input: **Reject**
- Output: **Accept**
- Forward: **Reject**
- Masquerading: off on this zone
- Allow forwarding to destination zone: **wan**

Add two traffic rules in **Network → Firewall → Traffic Rules**:

| Name | Source | Protocol | Destination port | Action |
|---|---|---|---|---|
| Guest DNS | guest | TCP + UDP | 53 | Accept |
| Guest DHCP | guest | UDP | 67 | Accept |

There must be no `guest → lan` forwarding. The existing WAN zone should keep masquerading enabled because it performs NAT to AH-GUEST.

## 2. Move Mansion WiFi onto the guest bridge

Go to **Network → Wireless → Mansion WiFi → Edit**:

- Mode: **Access Point**
- Network: select **guest** only
- SSID: `Mansion WiFi`
- Client isolation / isolate clients: enabled
- Country: Australia
- 2.4 GHz width: 20 MHz

For a private residence, use WPA2-PSK/CCMP and share the password with invited guests. The captive page will still appear after the Wi-Fi password is entered. If you intentionally keep the SSID open, client isolation is essential; a captive portal does not encrypt radio traffic.

Save and apply. Connect a phone and check that it receives a `192.168.20.x` address and can browse the Internet. Do not install the portal until this basic guest network works.

## 3. Install openNDS and the Mansion styling

Unzip this kit on a computer connected to the router's admin network. From a terminal in this folder, upload the two files:

```sh
scp mansion-splash.css root@192.168.1.1:/tmp/mansion-splash.css
scp configure-opennds.sh root@192.168.1.1:/tmp/configure-opennds.sh
```

Then connect to the router and run the installer:

```sh
ssh root@192.168.1.1
chmod +x /tmp/configure-opennds.sh
/tmp/configure-opennds.sh
```

The script deliberately stops if `br-guest` does not exist. It installs openNDS, backs up the original openNDS configuration and stylesheet, binds the portal to `br-guest`, applies the Mansion appearance, enables a 12-hour session, and caps each guest at 5 Mbps down / 1 Mbps up to protect the weak AH-GUEST backhaul.

## 4. Test the complete guest journey

1. Forget `Mansion WiFi` on a phone.
2. Reconnect to it.
3. Confirm the device receives `192.168.20.x`, not `192.168.1.x`.
4. The portal should open automatically. If it does not, browse to `http://neverssl.com`.
5. Accept the terms and continue.
6. Confirm Internet access works.
7. Confirm the guest cannot open `http://192.168.1.1` or reach any `192.168.1.x` device.

Useful router checks:

```sh
service opennds status
ndsctl status
logread -e opennds
```

## What the installer configures

- Portal interface: `br-guest`
- Gateway name: `Mansion WiFi`
- Click-to-continue flow with terms
- Maximum clients: 40
- Pre-authentication timeout: 10 minutes
- Idle timeout: 60 minutes
- Session length: 12 hours
- Per-client rate: 5 Mbps download / 1 Mbps upload

The portal records only normal connection/session information produced by openNDS. It does not ask for a name or email address. The public-facing name remains `Mansion WiFi`; the portal identifies the place as Fawkner Mansions, 250 Punt Road, Prahran.

## Rollback

The installer creates timestamped backups such as:

- `/etc/config/opennds.before-mansion-YYYYMMDD-HHMMSS`
- `/etc/opennds/htdocs/splash.css.before-mansion-YYYYMMDD-HHMMSS`

To disable the portal without changing the guest network:

```sh
service opennds stop
service opennds disable
```

Restore the timestamped files only from the same installation, then restart openNDS.

## Important limitation

Many captive-portal mini-browsers block JavaScript and external assets and may close as soon as authentication succeeds. The router version therefore keeps the styling in one local stylesheet and uses openNDS's native authentication form. The hosted preview demonstrates the full intended interaction and connected state; the router version prioritises reliable authentication across devices.
