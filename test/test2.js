bars: function (t) {
    var n = t,
        o = n.size,
        r = n.color,
        i = (function (e, t) {
            var n = {};
            for (var o in e) Lo.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
            if (null != e && Ro) {
                var r,
                    i = m(Ro(e));
                try {
                    for (i.s(); !(r = i.n()).done; ) (o = r.value), t.indexOf(o) < 0 && wo.call(e, o) && (n[o] = e[o]);
                } catch (a) {
                    i.e(a);
                } finally {
                    i.f();
                }
            }
            return n;
        })(n, ["size", "color"]);
    return e.createElement(
        "svg",
        (function (e, t) {
            for (var n in t || (t = {})) Lo.call(t, n) && No(e, n, t[n]);
            if (Ro) {
                var o,
                    r = m(Ro(t));
                try {
                    for (r.s(); !(o = r.n()).done; ) (n = o.value), wo.call(t, n) && No(e, n, t[n]);
                } catch (i) {
                    r.e(i);
                } finally {
                    r.f();
                }
            }
            return e;
        })({ viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", fill: r, width: "".concat(o, "px") }, i),
        e.createElement(
            "rect",
            { y: "10", width: "15", height: "120", rx: "6" },
            e.createElement("animate", { attributeName: "height", begin: "0.5s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
            e.createElement("animate", { attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
        ),
        e.createElement(
            "rect",
            { x: "30", y: "10", width: "15", height: "120", rx: "6" },
            e.createElement("animate", { attributeName: "height", begin: "0.25s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
            e.createElement("animate", { attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
        ),
        e.createElement(
            "rect",
            { x: "60", width: "15", height: "140", rx: "6" },
            e.createElement("animate", { attributeName: "height", begin: "0s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
            e.createElement("animate", { attributeName: "y", begin: "0s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
        ),
        e.createElement(
            "rect",
            { x: "90", y: "10", width: "15", height: "120", rx: "6" },
            e.createElement("animate", { attributeName: "height", begin: "0.25s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
            e.createElement("animate", { attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
        ),
        e.createElement(
            "rect",
            { x: "120", y: "10", width: "15", height: "120", rx: "6" },
            e.createElement("animate", { attributeName: "height", begin: "0.5s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
            e.createElement("animate", { attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
        )
    );
},