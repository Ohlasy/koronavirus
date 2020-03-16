---
layout: default
title: "Koronavir na Boskovicku: Restaurace"
description: "Restaurace, kavárny a cukrárny, které nabízí výdej přes okénko nebo rozvoz."
---

# [Koronavirus na Boskovicku](/) / Restaurace

Restaurace, kavárny a cukrárny, které nabízí výdej přes okénko nebo rozvoz:

<table>
    <thead>
        <tr>
            <td>Název</td>
            <td>Telefon</td>
            <td>Režim</td>
        </tr>
    </thead>
    <tbody>
    {% for item in site.data.restaurace %}
    {% if item["název"] %}
    <tr>
        <td>
            {% if item.odkaz %}
            <a href='{{item.odkaz}}'>{{item["název"]}}</a>
            {% else %}
            {{item["název"]}}
            {% endif %}
        </td>
        <td>
            {{item.telefon | replace: " ", " "}}
            {% if item.telefon_2 %}
                {{item.telefon_2 | replace: " ", " "}}
            {% endif %}
        </td>
        <td>{{item.popis}}</td>
    </tr>
    {% endif %}
    {% endfor %}
    </tbody>
</table>

Pokud potřebujete změnit nebo přidat data, ozvěte se někomu z následujících editorů:

- Marek Osouch <osouch.marek@gmail.com>

Tento seznam je k dispozici též [ve strojově čitelné podobě](/api/restaurace.json).
