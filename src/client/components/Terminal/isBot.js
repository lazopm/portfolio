const pattern = new RegExp('bot|crawl|spider|borg|yahoo|slurp|archiver|netresearch|lycos|scooter\
|altavista|teoma|oegp|charlotte|http client|htdig|ichiro|mogimogi|larbin|pompos|scrubby\
|searchsight|semanticdiscovery|snappy|speedy|voila|vortex|voyager|zao|zeal|dataparksearch\
|findlinks|yottaamonitor|browsermob|httpmonitor|bingpreview|pagepeeker|webthumb|url2png|zooshot\
|gomeza|google sketchup|read later|pingdom|facebook|rackspace|scan|link|ezine|preview\
|dig|tarantula|urllib|jakarta|wget|rget|monitor|libwww|moozilla|seer|spice|snoopy|feedfetcher\
|google wireless transcoder|curl|wordpress|java|netfront|archive|xenu|feed|appmanager|covario\
|perl|host|lwp|page speed|ptst|digext|nutch|sleuth|yottaamonitor', 'i');

export default () => pattern.test(window.navigator.userAgent);
