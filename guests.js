// ============================================================
//  GUEST LIST  —  the only names that get a personalized invite
//  ------------------------------------------------------------
//  Each guest gets a private code; their link is  yoursite.com/?g=CODE
//  Add one line per guest below:  code : 'Full Name'.
//
//  NOTE: because this is a static page with no server, the list
//  still lives in the page source — anyone opening DevTools can
//  read it. This stops casual link-editing / param-swapping; it
//  is not a hard security wall. The name check at the door remains
//  the real gate.
// ============================================================
var GUESTS = {
  'r45bvv': 'Julio Kolopitawondal',
  'z16na1': 'Ayu Gracia',
  '5pii8r': 'Dyah Annisa',
  '51yq04': 'Jelia Lolindu',
  '0og6y7': 'Adinda Manueke',
  '0c38nb': 'Adityano Ratu',
  'p8uv5n': 'Dipta P',
  'p1jx86': 'Hendriawan Jumawan',
  'fd233t': 'Patricia Adam',
  'inzahv': 'Raisa Maringka',
  'w2pxq6': 'Ryan J',
  'qgbisy': 'Elwene Lintong',
  'o38f71': 'Julia Wowor',
  'rhtj95': 'Astrid Mongi',
  '4bdw2l': 'Switly Mait',
  'kany8m': 'Erik Parera',
  'vxbd2n': 'Clara Warouw',
  'kwblxv': 'Michelle Surentu',
  'h44eui': 'Nata',
  'r8brzk': 'Aney Turambi',
  'all76f': 'Ling-ling',
  '6dvnlj': 'Martino',
  'jxjlsi': 'Grady Wantah',
  '4ez2fg': 'Junior Lakat',
  '6oh6xw': 'Aron Kaligis',
  'kq6t80': 'Billy Rewah',
  '6nayyh': 'Haryo Hartoyo',
  'j8n1ud': 'Mariska Tanauma',
  't5psam': 'Monica Tangka',
  'eb5j8n': 'Ai',
  'dic1ve': 'Nikita Lengkey',
  'dnasez': 'Pingkan Kenda',
  'ejz7zd': 'Stevani Andries',
  '9nr3de': 'Kezi Pangemanan',
  '1b8zg7': 'Richi Lala',
  '0fo5ux': 'Valdo Palenewen',
  'vd4nan': 'Henry Burhan & Jes',
  's144ik': 'Ziby Makalew',
  'ibioln': 'Cika',
  'k9xke2': 'Ecei',
  '5gj8oo': 'Stevan',
  'uunf5c': 'Maynard',
  'y9p3oa': 'Riry',
  'fv58eh': 'Jojo',
  '4e39mt': 'Seyla',
  'r7bgoq': 'Abe',
  'uyph5k': 'Beny',
  '68qr9x': 'Ipin',
  'hro05h': 'Del',
  'zfmi3l': 'Ika Pankey',
  '08am87': 'Ika Kason',
  '6wjb9k': 'Yoga',
  'ziwf5i': 'Cindry',
  'wfxuxn': 'Tinut',
  'tjj8rm': 'Gead',
  '090jl6': 'Ifer',
  'xviguk': 'Dada',
  'pd2vmg': 'Mas Aiko',
};

// ---- read the invite code from the link, e.g. yoursite.com/?g=k7f2a9 ----
var inviteCode = (new URLSearchParams(window.location.search).get('g') || '').trim();
var guestName = null;
var invalidInvite = false;

if (inviteCode){
  if (Object.prototype.hasOwnProperty.call(GUESTS, inviteCode)){
    guestName = GUESTS[inviteCode];
  } else {
    // code present but not on the list → block, show neutral message
    invalidInvite = true;
  }
}
// (no code at all → generic invite: names + story, but no personalized "To:")

if (invalidInvite){
  document.getElementById('invalidScreen').classList.add('show');
  document.querySelector('.stage-wrap').style.display = 'none';
} else if (guestName){
  document.getElementById('guestName').textContent = guestName;
  document.getElementById('guestBlock').classList.add('show');
}
