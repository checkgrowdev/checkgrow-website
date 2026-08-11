/* Personal / free / disposable email providers the waitlist rejects: the
   signup must be a company address. Shared by the form (tooltip) and the
   API route (backstop for direct calls). Exact domain match, lowercased. */

const FREE_EMAIL_DOMAINS = new Set<string>([
  /* Google */
  "gmail.com", "googlemail.com",
  /* Yahoo family */
  "yahoo.com", "yahoo.co.uk", "yahoo.fr", "yahoo.de", "yahoo.es", "yahoo.it",
  "yahoo.ca", "yahoo.com.br", "yahoo.com.mx", "yahoo.com.ar", "yahoo.co.in",
  "yahoo.in", "yahoo.co.jp", "yahoo.com.au", "yahoo.gr", "yahoo.se",
  "yahoo.dk", "yahoo.pl", "yahoo.ro", "yahoo.nl", "yahoo.ie", "yahoo.pt",
  "ymail.com", "rocketmail.com",
  /* Microsoft */
  "outlook.com", "outlook.es", "outlook.fr", "outlook.de", "outlook.it",
  "outlook.pt", "outlook.be", "outlook.at", "outlook.dk", "outlook.hu",
  "outlook.jp", "outlook.com.br", "outlook.com.ar", "outlook.com.au",
  "outlook.co.il", "outlook.sa", "outlook.in", "outlook.ie", "outlook.cz",
  "hotmail.com", "hotmail.co.uk", "hotmail.fr", "hotmail.de", "hotmail.it",
  "hotmail.es", "hotmail.nl", "hotmail.be", "hotmail.com.br",
  "hotmail.com.ar", "hotmail.ca", "hotmail.se", "hotmail.gr", "hotmail.rs",
  "live.com", "live.co.uk", "live.fr", "live.de", "live.it", "live.nl",
  "live.be", "live.se", "live.dk", "live.no", "live.ie", "live.com.au",
  "live.ca", "live.com.mx", "live.com.ar", "live.com.pt", "msn.com",
  "windowslive.com",
  /* Apple */
  "icloud.com", "me.com", "mac.com",
  /* AOL + US ISPs */
  "aol.com", "aim.com", "verizon.net", "att.net", "sbcglobal.net",
  "bellsouth.net", "comcast.net", "xfinity.com", "cox.net", "charter.net",
  "earthlink.net", "juno.com", "netzero.net", "optonline.net",
  "frontier.com", "windstream.net", "centurylink.net", "roadrunner.com",
  "rr.com", "netscape.net", "lycos.com", "excite.com",
  /* Canada */
  "shaw.ca", "rogers.com", "sympatico.ca", "telus.net", "videotron.ca",
  "bell.net",
  /* Privacy-first personal mail */
  "proton.me", "protonmail.com", "protonmail.ch", "pm.me", "tutanota.com",
  "tutanota.de", "tutamail.com", "tuta.io", "tuta.com", "hushmail.com",
  "fastmail.com", "fastmail.fm", "hey.com", "duck.com", "mailfence.com",
  "posteo.de", "posteo.net", "disroot.org", "riseup.net", "runbox.com",
  "mailbox.org", "skiff.com",
  /* mail.com family */
  "mail.com", "email.com", "usa.com", "consultant.com", "dr.com",
  "engineer.com", "cheerful.com", "myself.com", "post.com", "europe.com",
  "writeme.com", "iname.com", "techie.com", "inbox.com",
  /* Germany / Austria / Switzerland */
  "gmx.de", "gmx.net", "gmx.at", "gmx.ch", "gmx.com", "web.de",
  "t-online.de", "freenet.de", "arcor.de", "online.de", "mail.de",
  "email.de", "bluewin.ch", "sunrise.ch", "aon.at", "chello.at",
  /* France */
  "orange.fr", "wanadoo.fr", "free.fr", "laposte.net", "sfr.fr", "neuf.fr",
  "bbox.fr", "aliceadsl.fr", "numericable.fr",
  /* Italy */
  "libero.it", "virgilio.it", "tiscali.it", "alice.it", "tin.it",
  "fastwebnet.it", "email.it", "inwind.it", "iol.it",
  /* Spain / Portugal */
  "terra.com", "terra.es", "telefonica.net", "ono.com", "sapo.pt",
  /* Netherlands / Belgium */
  "ziggo.nl", "kpnmail.nl", "planet.nl", "home.nl", "xs4all.nl",
  "telenet.be", "skynet.be", "proximus.be",
  /* UK / Ireland */
  "btinternet.com", "btopenworld.com", "blueyonder.co.uk", "ntlworld.com",
  "virginmedia.com", "sky.com", "talktalk.net", "tiscali.co.uk",
  "plus.net", "wanadoo.co.uk", "eircom.net",
  /* Nordics */
  "online.no", "mail.dk", "comhem.se", "spray.se", "telia.com", "elisa.fi",
  /* Central & Eastern Europe */
  "seznam.cz", "email.cz", "centrum.cz", "atlas.cz", "azet.sk",
  "zoznam.sk", "wp.pl", "o2.pl", "onet.pl", "onet.eu", "op.pl",
  "interia.pl", "interia.eu", "gazeta.pl", "poczta.fm", "tlen.pl",
  "abv.bg", "mail.bg", "dir.bg", "freemail.hu", "citromail.hu",
  "indamail.hu", "ukr.net", "i.ua", "meta.ua",
  /* Croatia & Balkans */
  "net.hr", "inet.hr", "htnet.hr", "optinet.hr", "zg.t-com.hr",
  "t-com.me", "teol.net", "blic.net",
  /* Russia & CIS */
  "mail.ru", "bk.ru", "inbox.ru", "list.ru", "internet.ru", "rambler.ru",
  "yandex.ru", "yandex.com", "yandex.ua", "yandex.by", "yandex.kz",
  "ya.ru", "pochta.ru",
  /* Greece / Turkey / Israel / Middle East */
  "otenet.gr", "hol.gr", "forthnet.gr", "in.gr", "freemail.gr",
  "mynet.com", "walla.co.il", "walla.com", "012.net.il",
  /* Asia */
  "qq.com", "foxmail.com", "163.com", "126.com", "yeah.net", "sina.com",
  "sina.cn", "sohu.com", "aliyun.com", "139.com", "189.cn", "naver.com",
  "hanmail.net", "daum.net", "nate.com", "kakao.com", "nifty.com",
  "biglobe.ne.jp", "excite.co.jp", "docomo.ne.jp", "ezweb.ne.jp",
  "softbank.ne.jp", "rediffmail.com", "sify.com", "indiatimes.com",
  "zoho.com", "zohomail.com", "zohomail.eu", "zohomail.in",
  /* Latin America */
  "uol.com.br", "bol.com.br", "terra.com.br", "ig.com.br", "globo.com",
  "globomail.com", "oi.com.br", "r7.com", "zipmail.com.br",
  "prodigy.net.mx", "fibertel.com.ar", "speedy.com.ar", "arnet.com.ar",
  /* Africa */
  "mweb.co.za", "vodamail.co.za", "webmail.co.za", "telkomsa.net",
  /* Australia / NZ */
  "bigpond.com", "bigpond.net.au", "optusnet.com.au", "iinet.net.au",
  "internode.on.net", "tpg.com.au", "westnet.com.au", "xtra.co.nz",
  /* Disposable / temporary */
  "mailinator.com", "guerrillamail.com", "guerrillamail.info",
  "sharklasers.com", "10minutemail.com", "temp-mail.org", "tempmail.com",
  "tempmail.dev", "throwawaymail.com", "yopmail.com", "yopmail.fr",
  "getnada.com", "nada.email", "dispostable.com", "maildrop.cc",
  "mintemail.com", "mohmal.com", "trashmail.com", "trashmail.de",
  "mytemp.email", "fakeinbox.com", "spamgourmet.com", "mailnesia.com",
  "emailondeck.com", "moakt.com", "tmpmail.org", "burnermail.io",
  "33mail.com", "jetable.org", "mailcatch.com", "inboxkitten.com",
  "tempinbox.com", "discard.email", "spambog.com", "mail-temporaire.fr",
]);

/** true when the address's domain is not a known personal/free provider */
export function isCompanyEmail(email: string): boolean {
  const at = email.lastIndexOf("@");
  if (at < 0) return false;
  const domain = email.slice(at + 1).trim().toLowerCase();
  return domain.length > 0 && !FREE_EMAIL_DOMAINS.has(domain);
}

export const COMPANY_EMAIL_MESSAGE = "Please add your company email";
