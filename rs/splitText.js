var cD = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gD(W) {
    return W && W.__esModule && Object.prototype.hasOwnProperty.call(W, "default") ? W.default : W
}
var U = {
    exports: {}
};
(function(W, lD) {
    (function(k, q) {
        q(lD)
    }
    )(cD, function(k) {
        var q = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
        function X(C) {
            var D = C.nodeType
              , i = "";
            if (D === 1 || D === 9 || D === 11) {
                if (typeof C.textContent == "string")
                    return C.textContent;
                for (C = C.firstChild; C; C = C.nextSibling)
                    i += X(C)
            } else if (D === 3 || D === 4)
                return C.nodeValue;
            return i
        }
        /*!
 * SplitText: 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var R, J, Z, V, $, m, oD = /(?:\r|\n|\t\t)/g, rD = /(?:\s\s+)/g, dD = " ", DD = function(D) {
            R = document,
            J = window,
            V = V || D || J.gsap || console.warn("Please gsap.registerPlugin(SplitText)"),
            V && (m = V.utils.toArray,
            $ = V.core.context || function() {}
            ,
            Z = 1)
        }, uD = function(D) {
            return J.getComputedStyle(D)
        }, K = function(D) {
            return D.position === "absolute" || D.absolute === !0
        }, pD = function(D, i) {
            for (var t = i.length, e; --t > -1; )
                if (e = i[t],
                D.substr(0, e.length) === e)
                    return e.length
        }, aD = " style='position:relative;display:inline-block;'", iD = function(D, i) {
            D === void 0 && (D = "");
            var t = ~D.indexOf("++")
              , e = 1;
            return t && (D = D.split("++").join("")),
            function() {
                return "<" + i + aD + (D ? " class='" + D + (t ? e++ : "") + "'>" : ">")
            }
        }, tD = function C(D, i, t) {
            var e = D.nodeType;
            if (e === 1 || e === 9 || e === 11)
                for (D = D.firstChild; D; D = D.nextSibling)
                    C(D, i, t);
            else
                (e === 3 || e === 4) && (D.nodeValue = D.nodeValue.split(i).join(t))
        }, Q = function(D, i) {
            for (var t = i.length; --t > -1; )
                D.push(i[t])
        }, eD = function(D, i, t) {
            for (var e; D && D !== i; ) {
                if (e = D._next || D.nextSibling,
                e)
                    return e.textContent.charAt(0) === t;
                D = D.parentNode || D._parent
            }
        }, fD = function C(D) {
            var i = m(D.childNodes), t = i.length, e, F;
            for (e = 0; e < t; e++)
                F = i[e],
                F._isSplit ? C(F) : e && F.previousSibling && F.previousSibling.nodeType === 3 ? (F.previousSibling.nodeValue += F.nodeType === 3 ? F.nodeValue : F.firstChild.nodeValue,
                D.removeChild(F)) : F.nodeType !== 3 && (D.insertBefore(F.firstChild, F),
                D.removeChild(F))
        }, x = function(D, i) {
            return parseFloat(i[D]) || 0
        }, hD = function(D, i, t, e, F, g, a) {
            var l = uD(D), E = x("paddingLeft", l), f = -999, O = x("borderBottomWidth", l) + x("borderTopWidth", l), z = x("borderLeftWidth", l) + x("borderRightWidth", l), j = x("paddingTop", l) + x("paddingBottom", l), G = x("paddingLeft", l) + x("paddingRight", l), o = x("fontSize", l) * (i.lineThreshold || .2), c = l.textAlign, s = [], T = [], M = [], d = i.wordDelimiter || " ", w = i.tag ? i.tag : i.span ? "span" : "div", N = i.type || i.split || "chars,words,lines", B = F && ~N.indexOf("lines") ? [] : null, A = ~N.indexOf("words"), v = ~N.indexOf("chars"), h = K(i), H = i.linesClass, FD = ~(H || "").indexOf("++"), Y = [], CD = l.display === "flex", nD = D.style.display, n, p, _, u, P, b, L, sD, S, r, ED, y;
            for (FD && (H = H.split("++").join("")),
            CD && (D.style.display = "block"),
            p = D.getElementsByTagName("*"),
            _ = p.length,
            P = [],
            n = 0; n < _; n++)
                P[n] = p[n];
            if (B || h)
                for (n = 0; n < _; n++)
                    u = P[n],
                    b = u.parentNode === D,
                    (b || h || v && !A) && (y = u.offsetTop,
                    B && b && Math.abs(y - f) > o && (u.nodeName !== "BR" || n === 0) && (L = [],
                    B.push(L),
                    f = y),
                    h && (u._x = u.offsetLeft,
                    u._y = y,
                    u._w = u.offsetWidth,
                    u._h = u.offsetHeight),
                    B && ((u._isSplit && b || !v && b || A && b || !A && u.parentNode.parentNode === D && !u.parentNode._isSplit) && (L.push(u),
                    u._x -= E,
                    eD(u, D, d) && (u._wordEnd = !0)),
                    u.nodeName === "BR" && (u.nextSibling && u.nextSibling.nodeName === "BR" || n === 0) && B.push([])));
            for (n = 0; n < _; n++) {
                if (u = P[n],
                b = u.parentNode === D,
                u.nodeName === "BR") {
                    B || h ? (u.parentNode && u.parentNode.removeChild(u),
                    P.splice(n--, 1),
                    _--) : A || D.appendChild(u);
                    continue
                }
                if (h && (S = u.style,
                !A && !b && (u._x += u.parentNode._x,
                u._y += u.parentNode._y),
                S.left = u._x + "px",
                S.top = u._y + "px",
                S.position = "absolute",
                S.display = "block",
                S.width = u._w + 1 + "px",
                S.height = u._h + "px"),
                !A && v)
                    if (u._isSplit)
                        for (u._next = p = u.nextSibling,
                        u.parentNode.appendChild(u); p && p.nodeType === 3 && p.textContent === " "; )
                            u._next = p.nextSibling,
                            u.parentNode.appendChild(p),
                            p = p.nextSibling;
                    else
                        u.parentNode._isSplit ? (u._parent = u.parentNode,
                        !u.previousSibling && u.firstChild && (u.firstChild._isFirst = !0),
                        u.nextSibling && u.nextSibling.textContent === " " && !u.nextSibling.nextSibling && Y.push(u.nextSibling),
                        u._next = u.nextSibling && u.nextSibling._isFirst ? null : u.nextSibling,
                        u.parentNode.removeChild(u),
                        P.splice(n--, 1),
                        _--) : b || (y = !u.nextSibling && eD(u.parentNode, D, d),
                        u.parentNode._parent && u.parentNode._parent.appendChild(u),
                        y && u.parentNode.appendChild(R.createTextNode(" ")),
                        w === "span" && (u.style.display = "inline"),
                        s.push(u));
                else
                    u.parentNode._isSplit && !u._isSplit && u.innerHTML !== "" ? T.push(u) : v && !u._isSplit && (w === "span" && (u.style.display = "inline"),
                    s.push(u))
            }
            for (n = Y.length; --n > -1; )
                Y[n].parentNode.removeChild(Y[n]);
            if (B) {
                for (h && (r = R.createElement(w),
                D.appendChild(r),
                ED = r.offsetWidth + "px",
                y = r.offsetParent === D ? 0 : D.offsetLeft,
                D.removeChild(r)),
                S = D.style.cssText,
                D.style.cssText = "display:none;"; D.firstChild; )
                    D.removeChild(D.firstChild);
                for (sD = d === " " && (!h || !A && !v),
                n = 0; n < B.length; n++) {
                    for (L = B[n],
                    r = R.createElement(w),
                    r.style.cssText = "display:block;text-align:" + c + ";position:" + (h ? "absolute;" : "relative;"),
                    H && (r.className = H + (FD ? n + 1 : "")),
                    M.push(r),
                    _ = L.length,
                    p = 0; p < _; p++)
                        L[p].nodeName !== "BR" && (u = L[p],
                        r.appendChild(u),
                        sD && u._wordEnd && r.appendChild(R.createTextNode(" ")),
                        h && (p === 0 && (r.style.top = u._y + "px",
                        r.style.left = E + y + "px"),
                        u.style.top = "0px",
                        y && (u.style.left = u._x - y + "px")));
                    _ === 0 ? r.innerHTML = "&nbsp;" : !A && !v && (fD(r),
                    tD(r, " ", " ")),
                    h && (r.style.width = ED,
                    r.style.height = u._h + "px"),
                    D.appendChild(r)
                }
                D.style.cssText = S
            }
            h && (a > D.clientHeight && (D.style.height = a - j + "px",
            D.clientHeight < a && (D.style.height = a + O + "px")),
            g > D.clientWidth && (D.style.width = g - G + "px",
            D.clientWidth < g && (D.style.width = g + z + "px"))),
            CD && (nD ? D.style.display = nD : D.style.removeProperty("display")),
            Q(t, s),
            A && Q(e, T),
            Q(F, M)
        }, BD = function(D, i, t, e) {
            var F = i.tag ? i.tag : i.span ? "span" : "div", g = i.type || i.split || "chars,words,lines", a = ~g.indexOf("chars"), l = K(i), E = i.wordDelimiter || " ", f = function(h) {
                return h === E || h === dD && E === " "
            }, O = E !== " " ? "" : l ? "&#173; " : " ", z = "</" + F + ">", j = 1, G = i.specialChars ? typeof i.specialChars == "function" ? i.specialChars : pD : null, o, c, s, T, M, d, w, N, B = R.createElement("div"), A = D.parentNode;
            for (A.insertBefore(B, D),
            B.textContent = D.nodeValue,
            A.removeChild(D),
            D = B,
            o = X(D),
            w = o.indexOf("<") !== -1,
            i.reduceWhiteSpace !== !1 && (o = o.replace(rD, " ").replace(oD, "")),
            w && (o = o.split("<").join("{{LT}}")),
            M = o.length,
            c = (o.charAt(0) === " " ? O : "") + t(),
            s = 0; s < M; s++)
                if (d = o.charAt(s),
                G && (N = G(o.substr(s), i.specialChars)))
                    d = o.substr(s, N || 1),
                    c += a && d !== " " ? e() + d + "</" + F + ">" : d,
                    s += N - 1;
                else if (f(d) && !f(o.charAt(s - 1)) && s) {
                    for (c += j ? z : "",
                    j = 0; f(o.charAt(s + 1)); )
                        c += O,
                        s++;
                    s === M - 1 ? c += O : o.charAt(s + 1) !== ")" && (c += O + t(),
                    j = 1)
                } else
                    d === "{" && o.substr(s, 6) === "{{LT}}" ? (c += a ? e() + "{{LT}}</" + F + ">" : "{{LT}}",
                    s += 5) : d.charCodeAt(0) >= 55296 && d.charCodeAt(0) <= 56319 || o.charCodeAt(s + 1) >= 65024 && o.charCodeAt(s + 1) <= 65039 ? (T = ((o.substr(s, 12).split(q) || [])[1] || "").length || 2,
                    c += a && d !== " " ? e() + o.substr(s, T) + "</" + F + ">" : o.substr(s, T),
                    s += T - 1) : c += a && d !== " " ? e() + d + "</" + F + ">" : d;
            D.outerHTML = c + (j ? z : ""),
            w && tD(A, "{{LT}}", "<")
        }, AD = function C(D, i, t, e) {
            var F = m(D.childNodes), g = F.length, a = K(i), l, E;
            if (D.nodeType !== 3 || g > 1) {
                for (i.absolute = !1,
                l = 0; l < g; l++)
                    E = F[l],
                    E._next = E._isFirst = E._parent = E._wordEnd = null,
                    (E.nodeType !== 3 || /\S+/.test(E.nodeValue)) && (a && E.nodeType !== 3 && uD(E).display === "inline" && (E.style.display = "inline-block",
                    E.style.position = "relative"),
                    E._isSplit = !0,
                    C(E, i, t, e));
                i.absolute = a,
                D._isSplit = !0;
                return
            }
            BD(D, i, t, e)
        }, I = function() {
            function C(i, t) {
                Z || DD(),
                this.elements = m(i),
                this.chars = [],
                this.words = [],
                this.lines = [],
                this._originals = [],
                this.vars = t || {},
                $(this),
                this.split(t)
            }
            var D = C.prototype;
            return D.split = function(t) {
                this.isSplit && this.revert(),
                this.vars = t = t || this.vars,
                this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var e = this.elements.length, F = t.tag ? t.tag : t.span ? "span" : "div", g = iD(t.wordsClass, F), a = iD(t.charsClass, F), l, E, f; --e > -1; )
                    f = this.elements[e],
                    this._originals[e] = {
                        html: f.innerHTML,
                        style: f.getAttribute("style")
                    },
                    l = f.clientHeight,
                    E = f.clientWidth,
                    AD(f, t, g, a),
                    hD(f, t, this.chars, this.words, this.lines, E, l);
                return this.chars.reverse(),
                this.words.reverse(),
                this.lines.reverse(),
                this.isSplit = !0,
                this
            }
            ,
            D.revert = function() {
                var t = this._originals;
                if (!t)
                    throw "revert() call wasn't scoped properly.";
                return this.elements.forEach(function(e, F) {
                    e.innerHTML = t[F].html,
                    e.setAttribute("style", t[F].style)
                }),
                this.chars = [],
                this.words = [],
                this.lines = [],
                this.isSplit = !1,
                this
            }
            ,
            C.create = function(t, e) {
                return new C(t,e)
            }
            ,
            C
        }();
        I.version = "3.12.5",
        I.register = DD,
        k.SplitText = I,
        k.default = I,
        Object.defineProperty(k, "__esModule", {
            value: !0
        })
    })
}
)(U, U.exports);
var xD = U.exports;
