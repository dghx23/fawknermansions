(() => {
  const path = window.location.pathname.replace(/\\/g,'/');
  const inAdmin = /\/admin\//.test(path);
  const inDocs = /\/docs\//.test(path);
  const inPortal = /\/wifi-portal\//.test(path);
  const base = (inAdmin || inDocs || inPortal) ? '../' : './';

  const theme =
    /wifi-project/.test(path) ? 'wifi' :
    /guest-operations-risks/.test(path) ? 'risk' :
    /guest-operations/.test(path) ? 'guest' :
    /room-inventory-model/.test(path) ? 'rooms' :
    /research/.test(path) ? 'research' :
    /heritage-project/.test(path) ? 'heritage' :
    /proposal/.test(path) ? 'proposal' :
    inPortal ? 'wifi' :
    'public';

  document.body.classList.add('fm-shell','fm-theme-'+theme);
  if(inPortal) document.body.classList.add('fm-portal');

  const items = [
    ['home','Home',base+'index.html'],
    ['proposal','Proposal',base+'docs/proposal.html'],
    ['heritage','Heritage',base+'admin/heritage-project.html'],
    ['wifi','Wi‑Fi',base+'admin/wifi-project.html'],
    ['guest','Guest Ops',base+'admin/guest-operations.html'],
    ['rooms','Rooms',base+'admin/room-inventory-model.html'],
    ['research','Research',base+'admin/research.html'],
    ['risk','Risk',base+'admin/guest-operations-risks.html'],
    ['portal','Portal',base+'wifi-portal/index.html'],
    ['dashboard','Dashboard',base+'admin/index.html']
  ];

  function isActive(key, href){
    if(key==='home') return /\/index\.html$/.test(path) && !inAdmin && !inDocs && !inPortal;
    if(key==='dashboard') return /\/admin\/index\.html$/.test(path);
    if(key==='proposal') return /\/docs\/proposal\.html$/.test(path);
    if(key==='heritage') return /heritage-project\.html$/.test(path);
    if(key==='wifi') return /wifi-project\.html$/.test(path);
    if(key==='guest') return /guest-operations\.html$/.test(path) && !/risks/.test(path);
    if(key==='rooms') return /room-inventory-model\.html$/.test(path);
    if(key==='research') return /admin\/research\.html$/.test(path);
    if(key==='risk') return /guest-operations-risks\.html$/.test(path);
    if(key==='portal') return /wifi-portal\/index\.html$/.test(path);
    return false;
  }

  const nav = document.createElement('div');
  nav.id='fm-global-nav';
  nav.innerHTML = `
    <div class="fm-nav-inner">
      <a class="fm-brand" href="${base}index.html" aria-label="Fawkner Mansions home">
        <span class="fm-brand-mark">FM</span>
        <span class="fm-brand-copy"><strong>Fawkner Mansions</strong><span>Heritage · Operations · Research</span></span>
      </a>
      <nav class="fm-nav-scroll" aria-label="Project navigation">
        ${items.map(([key,label,href]) => `<a class="fm-nav-link fm-nav-${key}${isActive(key,href)?' active':''}" href="${href}">${label}</a>`).join('')}
      </nav>
    </div>`;
  document.body.insertAdjacentElement('afterbegin',nav);

  if(!inPortal){
    const labels = {
      public:['Public history','250 Punt Road · Prahran · Victoria'],
      proposal:['Owner proposal','Heritage + operations + managed infrastructure'],
      heritage:['Heritage & legacy','Research · book · documentary · 3D/VR'],
      wifi:['Wi‑Fi & infrastructure','Managed network · guest access · revenue'],
      guest:['Guest operations','Digital check-in · identity · payments · access'],
      rooms:['Room & capacity model','Theoretical · usable · occupied · network load'],
      research:['Research & development','Versioned evidence · sources · contradictions'],
      risk:['Risk & compliance','Privacy · identity · availability · governance']
    };
    const [a,b]=labels[theme]||labels.public;
    const ribbon=document.createElement('div');
    ribbon.className='fm-page-ribbon';
    ribbon.innerHTML=`<div class="fm-page-ribbon-inner"><strong>${a}</strong><span>${b}</span></div>`;
    nav.insertAdjacentElement('afterend',ribbon);
  }
})();