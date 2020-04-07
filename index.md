---
layout: default
title: Koronavir na Boskovicku
description: Aktuální informace o koronaviru na Boskovicku
---

<script src="stats.js"></script>

# Aktuální informace o koronaviru na Boskovicku

<ul>
    <li><span id="stats">Aktuální statistiky by se měly načíst za moment.</span></li>
    <li>Podrobný popis regionálních opatření najdete v <a href="https://ohlasy.info/clanky/2020/03/koronavirus-opatreni.html">pravidelně aktualizovaném textu Ohlasů</a>.</li>
</ul>

## Potřebuji pomoc

Pokud potřebujete pomoc například s nákupem nebo hlídáním dětí, máme k dispozici několik desítek dobrovolníků, někdo z nich se vám ozve a pomůže vám. (Celkem zatím úspěšně vyřízeno {{ site.data.poptavky | where: "stav", "Úspěšně vyřízeno" | size }} poptávek 🎉)

<form action="poptavka.html">
    <input type="submit" value="Požádat o pomoc" />
</form>

Můžete také využít boskovickou non-stop infolinku 725 112 573. Volejte ale prosím pouze v případě, že se vám nedaří informace nebo pomoc sehnat online. (Pokud ve svém okolí víte o někom, kdo by pomoc mohl potřebovat, ale na webu ji nenajde, číslo mu dejte.)

## Jídlo a nákupy

Seznam {{ site.data.restaurace | where_exp: "item", "item.popis" | size }} restaurací, kaváren a cukráren, které nabízí výdej přes okénko nebo rozvoz, najdete [na samostatné stránce](restaurace.html).

## Roušky

- Pokud potřebujete roušku, [můžete si ji podle návodu vyrobit](https://docs.google.com/document/d/196nnOt7xF2vrkI66Pxy3nXILoQDO5oppffC94bq0iK0/preview).
- Pokud máte kapacitu, vyrobte prosím roušky navíc a dopravte je v čase 12.00–16.00 na sběrné místo v kině Panorama. Budou průběžně distribuovány dál podle potřeby.
- Pokud máte nedostatek roušek, ozvěte se, doručíme:

<form action="rousky.html">
    <input type="submit" value="Potřebuji roušku" />
</form>

{% assign sum = 0 %}
{% assign items = site.data.rousky | map: "poskytnutý_počet" %}
{% for r in items %}
{% assign sum = sum | plus: r %}
{% endfor %}

Celkem zatím předáno více než {{ sum }} roušek 🎉

## Asi jsem nemocný, co mám dělat?

Pokud máte symptomy onemocnění (zvýšenou teplotu, dušnost, kašel, bolesti svalů), můžete volat na následující čísla, ideálně v uvedeném pořadí:

1. Váš obvodní praktický lékař
2. Krajská hygienická stanice JMK: 773 768 994. (Pracovní dny 8:00–17:00, mimo tuto dobu Státní zdravotní ústav)
3. Státní zdravotní ústav (nonstop linky): 724 810 106, 725 191 367
4. Infolinka krajského úřadu (bezplatná linka, funkční ve všední dny i o víkendech 7.00–19.00): 800 129 921
5. Infolinky zdravotních pojišťoven:
   - VZP: 952 222 222
   - VoZP: 844 888 888
   - ČPZP: 810 800 800
   - OZP: 261 105 555
   - ZP ŠKODA: 800 209 000
   - ZPMV: 844 211 211
   - RBP: 800 213 213

V souvislosti s koronavirem byla zřízena také nová bezplatná celostátní informační linka 1212.

**Důležité: Nemocnice Boskovice neprovádí vyšetření na Covid 19 ani odběry pro tato vyšetření,
nechoďte tam kvůli tomu, zbytečně byste komplikovali provoz nemocnice.**

## Nabízím pomoc

Pokud chcete nabídnout svou pomoc, přidejte se prosím do sdíleného chatu a domluvíme se tam.

<form action="https://bit.ly/koronabce">
    <input type="submit" value="Nabídnout pomoc" />
</form>

## Místní texty

<div class="articles">
{% for article in site.data.articles %}
{% if article.tags contains "koronavirus" %}
<a href="https://ohlasy.info{{ article.relativeURL }}" class="article-preview">
<img src="{{ article.cover-photo }}">
<p>{{ article.title}}</p>
</a>
{% endif %}
{% endfor %}
</div>

## Celostátní informační zdroje

- Nejčastější omyly a mýty: [prolékaře.cz](https://www.prolekare.cz/covid-19/20-mytu-o-sars-cov-2-a-jak-je-vyvratit-prehledna-argumentacni-databanka-121721),
  [Ministerstvo zdravotnictví](https://koronavirus.mzcr.cz/myty-a-fakta/)
- [Centrální informační web Ministerstva zdravotnictví](https://koronavirus.mzcr.cz/)
- [Aktuální statistiky nakažených v celé ČR](https://onemocneni-aktualne.mzcr.cz/covid-19)
- [Info Státního zdravotního ústavu](http://www.szu.cz/tema/prevence/rady-a-doporuceni-pro-domaci-karantenu) (například jak se chovat v domácí karanténě)

## O webu

Web zprovoznily [Ohlasy](https://ohlasy.info). Mít v regionu dobré noviny se vyplatí nejen při pandemii – [přispějte nám na provoz](https://www.darujme.cz/projekt/1202392).

Aktualizujeme neustále, pomoc uvítáme ([zdrojový kód](https://github.com/Ohlasy/koronavirus)),
technické nebo obsahové připomínky k webu můžete poslat [mailem](mailto:tomas.znamenacek@ohlasy.info).
