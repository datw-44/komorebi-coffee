# KOMOREBI COFFEE — 制作ポートフォリオ

架空の個人経営カフェを想定した1ページの静的サイトです。店舗・商品・営業時間・価格は設定であり、実際の営業・予約・所在地はありません。写真はデザインの世界観を伝えるストック写真です。実店舗、実商品、写真家による推薦を表すものではありません。

## 開き方
index.htmlをブラウザで開いてください。styles.css、script.js、assetsフォルダは同じ階層に保持してください。外部ライブラリ、Google Fonts、外部画像への実行時リクエストはありません。
今回のローカルプレビュー: http://127.0.0.1:8765/ （プレビューサーバー稼働中のみ利用可能）。公開サイトではありません。

## 今回のデザイン
- 日差しの入る木造カフェの実写を全面に配置し、構図の暗部へ店名とコピーを配置。
- 黒褐色・ウォームホワイト・控えめなブラウンに全体を統一。
- ABOUT、コーヒー、ラテ、チーズケーキを別々の写真で構成。
- メニュー価格を揃え、所在地・営業設定を一覧化。
- 未完成表示、使い回しのSVG、制作価格の説明を画面から撤去。
- デモ表記と写真のイメージ表記を上部・メニュー末尾・フッターへ整理。
- モバイル用ヒーロー画像を用意。メニュー開閉、Esc、リンク選択後の閉鎖、画面幅変更に対応。

## 写真の出典・ライセンス
確認日・取得日: 2026-11-02
すべてPexelsの個別ページで無料利用の表示を確認し、Pexels Licenseに基づいて取得。商用Webサイト・販促利用、加工、クレジット省略が認められています。今回は出典を以下に保持し、サイト末尾にもPexelsと記載しています。

共通ライセンス: https://www.pexels.com/license/
人物・ブランドによる推薦を暗示する利用、無加工写真そのものの販売、他のストックサービスへの再配布、商標への使用などは禁止されています。写真単体を商品として販売しないでください。

| 用途 / 保存ファイル | 写真家 | 個別出典 |
| --- | --- | --- |
| ヒーロー / assets/hero-desktop.jpg・hero-mobile.jpg | Esma Çokluk | https://www.pexels.com/photo/sunlit-cozy-cafe-interior-with-wooden-beams-29086396/ |
| ABOUT / assets/about.jpg | Nadia Vasil'eva | https://www.pexels.com/photo/cafe-table-in-a-wooden-interior-lit-by-the-sunlight-13696472/ |
| ハンドドリップ / assets/coffee.jpg | Eva Belšánová Langrová | https://www.pexels.com/photo/minimalist-black-coffee-cup-with-sunlight-patterns-30088195/ |
| カフェラテ / assets/latte.jpg | Maksim Goncharenok | https://www.pexels.com/photo/close-up-shot-of-a-ceramic-cup-of-coffee-with-latte-art-4823589/ |
| チーズケーキ / assets/cake.jpg | elif tekkaya | https://www.pexels.com/photo/a-delicious-cheesecake-on-a-plate-10831511/ |

Pexels画像配信サーバーからJPEGで取得し、配信用パラメーターでリサイズ・圧縮・トリミング。CSSでも表示領域に合わせて切り抜き、一部彩度を控えています。ヒーローのPC・モバイルは同じ写真の異なるトリミングであり、別セクションに同じ写真は再使用していません。メニュー写真は販売商品の実写を装わずイメージとして掲載しています。
写真6ファイルの総容量: 796,290 bytes。メイン画像以外は遅延読み込み。ヒーローはpictureでPC・モバイルを切り替え、優先取得します。

## 実際のブラウザ検証
ローカルHTTPでインアプリブラウザから確認しました。
- PC: 1440×1000、スマホ: 375×812のviewport指定で実画面を確認。
- 両サイズで全写真5点の読み込み成功。モバイルではhero-mobile.jpgが選択されることを確認。
- PC・スマホでページ横幅がviewport以内。スマホのmain/header/footer内で横にはみ出す要素なし。
- PCのメニューナビから#menuへ移動し、対象セクションへのフォーカス移動を確認。
- スマホでナビを開くとaria-expanded=true、ナビ表示を確認。
- 店舗情報リンクで#accessへ移動し、ナビが閉じ、セクションへフォーカス移動を確認。
- Escでナビが閉じ、ボタンへフォーカスが戻ることを確認。
- ブラウザの警告・エラーログなし。
- 全体スクリーンショットで全セクションのレイアウトとトーンを確認。
- node --checkでJavaScript構文確認済み。

スクリーンショットはscreenshots/に保存。幅指定はブラウザviewport基準で、OSのスクロールバーや撮影APIの表示領域の差により画像実寸は一致しない場合があります。

## 未確認・未実施
iPhone/Android実機、Safari/Firefox、Lighthouseによる速度測定は未実施です。実店舗への転用には、顧客承認済み店舗情報・商品写真・連絡先への差し替えが必要です。公開・予約・お問い合わせ機能の追加は今回の対象外です。

旧coffee.svg・cake.svgは既存ファイルとして残していますが、このサイトからの参照はありません。変更前のコードは作業用バックアップに保持しています。ZIPは作成していません。

## GitHubへの保存と今後の更新
リポジトリ: https://github.com/datw-44/komorebi-coffee
ブランチ: main / リモート: origin

このフォルダを今後も編集元として使ってください。PowerShellでこのフォルダを開き、変更内容を確認してからコミット・プッシュします。

```powershell
git status
git diff
git add -- index.html styles.css script.js assets README.md .gitignore
git commit -m "Update cafe website"
git push
```

別のPCやGitHub上で更新した場合、作業開始前にローカルの未コミット変更を保存してから `git pull --ff-only` で取り込んでください。競合時にforce pushやファイル削除で解決しないでください。
公開リポジトリのため、認証情報や個人情報はコミットしないでください。
確認用screenshots/と別フォルダの複製2kaim/は保存対象外です。ローカルからは削除していません。
