# KOMOREBI COFFEE 公開画面レビュー

確認日 2026-11-04（日本時間）。[公開サイト](https://datw-44.github.io/komorebi-coffee/)を内蔵ブラウザで確認。

[GitHub Pagesの公開元](https://github.com/datw-44/komorebi-coffee/settings/pages)は `main` のルート。確認したコミットは [00d1d81b10304e131f236b7fc762c63d70b2d1c3](https://github.com/datw-44/komorebi-coffee/commit/00d1d81b10304e131f236b7fc762c63d70b2d1c3)。同じコミットの[公開ワークフロー](https://github.com/datw-44/komorebi-coffee/actions/runs/41427705210)は成功。HTTPで取得したHTML・CSS・JS・画像6点のGit blobハッシュを照合し、9件すべて一致した。[照合データ](source-check.json)

| 画面 | 画像 |
|---|---|
| 全体 | [PC](screenshots/pc-1440-full.png) / [スマホ](screenshots/mobile-390-full.png) |
| ファーストビュー | [PC](screenshots/pc-1440-top.png) / [スマホ](screenshots/mobile-390-top.png) |
| ABOUT | [PC](screenshots/pc-1440-about.png) / [スマホ](screenshots/mobile-390-about.png) |
| MENU | [PC](screenshots/pc-1440-menu.png) / [スマホ](screenshots/mobile-390-menu.png) |
| INFORMATION | [PC](screenshots/pc-1440-access.png) / [スマホ](screenshots/mobile-390-access.png) |
| スマホナビ展開 | [スマホ](screenshots/mobile-390-nav.png) |

[日本語一覧](日本語一覧.md) ・ [フォント調査](フォント調査.md)

## 画面と文言の所見

| 公開画面の文言 | 所見 | 画面 |
|---|---|---|
| 静けさと、一杯の余韻。 | 両幅で1行。読点が短いコピーの途中で間を作る。スマホでは窓や照明の明暗が文字の背後に入り、文字の読みやすさが部分的に変わる。 | [PC](screenshots/pc-1440-top.png) / [スマホ](screenshots/mobile-390-top.png) |
| 私たちについて | ナビとヒーロー下端のリンク。日本語自体は自然だが、移動先は運営者の紹介よりカフェで過ごす時間の説明が中心。スマホのヒーロー下端は11pxで、英字店名に比べて導線が控えめ。 | [PC](screenshots/pc-1440-top.png) / [スマホ](screenshots/mobile-390-top.png) ・ [展開ナビ](screenshots/mobile-390-nav.png) |
| 窓辺にゆれる光と、カップから立ちのぼる香り。 | 両幅で「光と、」の後に2行へ分割。写真に合う情景描写だが、名詞句で終わるため説明より広告コピーに近い。「香りが立ちのぼる」は比喩的。 | [PC](screenshots/pc-1440-about.png) / [スマホ](screenshots/mobile-390-about.png) |
| 一杯を味わう、小さな余白を。 | 「味わう」の後の読点と、目的語「余白を」で終わる省略が重なり、文の着地点が曖昧。ヒーローの「日常に、小さな余白を。」とも表現が重なる。 | [PC](screenshots/pc-1440-about.png) / [スマホ](screenshots/mobile-390-about.png) ・ [PC](screenshots/pc-1440-top.png) / [スマホ](screenshots/mobile-390-top.png) |
| 今日の一杯を見つける | 見出しコピーとして読めるが、実際の遷移先はメニュー。操作後の内容を文言だけからは読み取りにくく、12pxの細いリンクも控えめに見える。 | [PC](screenshots/pc-1440-about.png) / [スマホ](screenshots/mobile-390-about.png) |
| ひと息つける場所を、思い描いて。 | 「場所を、」で明示的に改行。どのような場所か想像する呼びかけになっており、営業時間・定休日などを探す見出しとしては内容を予測しづらい。 | [PC](screenshots/pc-1440-access.png) / [スマホ](screenshots/mobile-390-access.png) |
| 木漏れ日のように、穏やかに。 | 意図的な余韻のある表現。前の見出しと合わせると抽象的な描写が続き、実用情報の前置きとして長く感じられる。 | [PC](screenshots/pc-1440-access.png) / [スマホ](screenshots/mobile-390-access.png) |
| コーヒーのある日常を描いたカフェです。 | 「日常を描いた」と「カフェです」の組み合わせが、店の紹介と制作コンセプトの説明を一文に混ぜており、どちらの視点か分かりにくい。 | [PC](screenshots/pc-1440-access.png) / [スマホ](screenshots/mobile-390-access.png) |

- ABOUTとINFORMATIONの日本語大見出しは、PCで42px・行間75.6px、スマホで27px・49.95px。どちらも2行の間が広く、見出しと本文の区切り以上に見出し内部の間が目立つ。
- MENUは商品名がPC 16px／スマホ17px、価格が24px／25px。価格はセリフ系の候補列、商品名はゴシック系の候補列で、数字の線と大きさが目立つ。説明・注記は小さく、写真や価格に比べて拾いにくい。[PC](screenshots/pc-1440-menu.png) / [スマホ](screenshots/mobile-390-menu.png)
- 英字ラベルはPC 11px／スマホ10px。広めの字間と小さなサイズで写真や大見出しから分離する一方、スマホでは補助見出しとして目に入りにくい。

## 表示確認

- PC 1440×1000、スマホ 390×844を指定。スクロールバーを除くページ表示幅は1425pxと375px。画像実寸は撮影APIによって1pxの差がある。
- 両幅でページの scrollWidth と clientWidth が一致。全体を目視し、主要な見出しや価格の切れ、意図しない単語途中の改行、セクションの重なりは確認されなかった。長い注意書きはスマホで自然に折り返す。
- 写真は両幅とも5点読み込み成功。GitHub上にはPC・スマホのヒーロー画像を含む6点。スマホのメニューを展開して別画像に保存。取得したコンソールエラーは0件。
- 実機や他ブラウザでの再現性は未確認。実描画フォントの個別名は未特定。資料のみを保存した。
