# 02. GTA VI と2027年製品の情報整理

> 確認日: **2026-10-22**。ここでは「公式に確認できたこと」と「報道・噂」を分けます。

## 1. 公式に確認できたこと

| 項目 | 内容 | 出典(確認日) |
|---|---|---|
| 発売日 | 2026年11月19日 | [Rockstar Games 公式 GTA VI](https://www.rockstargames.com/VI)(2026-10-22) |
| 対応プラットフォーム | PlayStation 5 / Xbox Series X\|S | 同上 |
| PC版 | **公式ページには記載なし。PC発売日・PC版の公式要件は未確認(未発表)** | 同上 |

注: 公式ページの取得結果は一部のみ(ページ全体は未確認)。着手時・発注前に再確認すること。

## 2. 報道・噂(一次資料では未確認)

| 内容 | 扱い | 出典 |
|---|---|---|
| 「PC版は2027年Q1(1〜3月)」 | **噂/報道。Rockstar公式の裏付けなし** | [GamesBeat](https://gamesbeat.com/grand-theft-auto-vis-pc-release-is-slated-for-q1-2027/)、[PC Gamer](https://www.pcgamer.com/games/grand-theft-auto/report-claims-grand-theft-auto-6-will-launch-on-pc-sooner-than-anyone-expected/)(旧READMEから転記。本文は未精査) |
| 「PC版は2027年12月」説 | 噂。公式確認なし | 検索結果の要約(2026-10-22)のため、出典の特定・確認は未実施 |
| Take-Two CEOの「ゲームは最終的に全プラットフォームへ」発言 | 一般的な方針で、PC版の日程の約束ではない | 検索結果の要約(2026-10-22)。一次資料は未確認 |
| 第三者サイトのPC推奨スペック表(RTX 3060/4070/5080等) | **予測であり公式要件ではない**。本書では購入根拠にしない | Eneba、FlowUP等(旧README) |

## 3. 2027年製品の扱い

| 項目 | 状況 | 本書での扱い |
|---|---|---|
| RTX 50 SUPER / VRAM 24GB | NVIDIAが公式に発表した事実は確認できず。リーク・延期報道のみ([Club386](https://www.club386.com/?p=159687)、[Igor's Lab](https://www.igorslab.de/nvidia-geforce-rtx-50-super-angeblich-auf-q3-2026-verschoben/)等) | **未発表・噂。購入前提から除外**。価格・性能は書かない |
| Zen 6 | 一次資料は未確認 | **未発表扱い**。購入前提から除外 |
| AM5が2029年まで継続 | 「Computex 2026でAMDが2029年までのAM5サポートを表明」との[報道](https://tweaktown.com/news/111864/amds-am5-socket-support-for-ryzen-cpus-will-continue-through-2029-zen-6-and-zen-7/index.html)あり。AMDの一次資料は**未確認**。Zen 6のAM5対応も報道・パートナー資料ベース | 「報道あり・一次未確認」。将来のCPU交換を購入理由の主軸にはしない |
| Ryzen 7 9850X3D | 2026年1月29日発売・米国希望小売価格499ドルとAMD発表の[報道](https://www.tweaktown.com/news/109836/amd-confirms-ryzen-7-9850x3d-release-date-and-price/index.html)。TDP 120W・5.6GHz | 既発売品。国内価格は [03](./03-build-plans-2027-04.md) |

## 4. 性能に関する保証をしない項目

- GTA VIのPC版でのfps、解像度別性能、必要VRAMは**公開情報がなく予測もしません**。「4K60fps確実」といった保証はしません。
- 既存ゲームの実測値を使う場合は、ゲーム名・設定・解像度・測定元を併記し、GTA VIの予測値とは混ぜません。**今回の更新では実測値を採用していません**(旧READMEの価格×fpsグラフ・fps値は根拠がないため削除)。

## 5. 公式発表後の判断(トリガー)

| 状況 | 行動 |
|---|---|
| PC版の公式要件が出た | 推奨GPU/CPU/RAM/ストレージを [03](./03-build-plans-2027-04.md) と照合し、GPUクラスを再判断 |
| PC発売日が出たが要件未発表 | 要件発表まで待たず、段階購入(新基盤+3070、GPUは後日)を選べるようにする |
| 2027年3月時点でPC版情報が全くない | **期限(4月末)優先**。小+案B または 段階購入C で調達し、GPUは後日判断 |
| 要件が想定より重い/軽い | VRAM・CPU要件を見て小/中/大を入れ替える(大は価格上、基本非推奨) |
