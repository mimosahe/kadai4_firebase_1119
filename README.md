# 課題4 -LINE風アプリ-

## ①課題内容（どんな作品か）
- ReactとFirebaseで作ったLINE風アプリ

## ②工夫した点・こだわった点
- Reactを使ってみた。ほとんど写経になってしまったが、チャット送信時間を表示することでオリジナリティを出してみた。

## ③難しかった点・次回トライしたいこと(又は機能)
- Reactの環境構築
    - 写経しながら環境構築したので、Youtubeの人と自分との間でインストール未/済の差があるとき、エラーが多発して焦った。参考サイトを見ながら、要インストールの仕組みが既にインストールされているか確認し、なんとかできた。
- チャット送信時間の表示
    - serverTimeStampで日時が取得できていることは分かるのに、それをLINEのようにHH:mmで表示するのに苦戦した。チャット送信時の日時を取得するためonSnapshot()を使うが、serverTimeStampの作成中にデータ取得されてしまうため、値がnullになりエラーが発生してしまった。serverTimeStampを"estimate"にすることで解決した。

## ④質問・疑問・感想、シェアしたいこと等なんでも
- [感想]エラーにたくさん遭遇した分、少しだけエラー自己解決力が高まった気がする。
- [参考記事]
    - Reactについてざっと学ぶ動画
    https://www.youtube.com/watch?v=nRCNL9T3J98&ab_channel=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB
    - ReactとFirebaseでLINEクローンを作る動画（写経元）
    https://www.youtube.com/watch?v=Js9BsBsczE8&ab_channel=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB
    - React環境構築の手順
    https://tetoblog.org/2021/06/react-install/
    - チャット送信時間を表示する方法
    https://zenn.dev/danbo/articles/cb608872bdf4fa8487df
