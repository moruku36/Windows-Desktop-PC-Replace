# 図の管理(Mermaid → Pele SVG)

- 編集元: [`src/*.mmd`](./src/)(Mermaid)
- 生成物: `svg/*.svg`(Pele で生成)
- 公式: [Pele](https://pele.run/) / [API](https://pele.run/api) / [互換性](https://pele.run/compatibility)(2026-10-22 確認)

## 現在の状態(2026-10-22)

**SVGは未生成です。** この作業環境(Windows)の `npm` が `registry.npmjs.org` への接続時に TLS ハンドシェイクエラー(`EPROTO` / SSL alert 40)で失敗し、`pele` の公開版を確認・固定できませんでした。接続制限の回避や無効化(`strict-ssl=false` 等)は行っていません。

そのため、`svg/` には生成物がなく、各文書からのSVGへのリンクも張っていません。下の Mermaid は **GitHub の標準表示による暫定プレビュー**です(最終形ではありません)。

## 確認できている Pele の事実(公式 API ページ)

- npm パッケージ名は `pele`。`render(source, options).svg` でSVG文字列が得られる(`width` / `height` / `type` も返る)。
- CLI は公式ページに記載がなく**未確認**。本リポジトリのスクリプトはライブラリ API のみを使う。
- Mermaid のテーマは効かず、色は CSS 変数で制御する。日本語フォントの扱いは公式ページに記載がなく、`fontFamily` オプションで指定して**目視確認が必要**。

## 再生成手順(接続可能な正式な環境で)

```bash
npm view pele version          # 公開済みバージョンを確認
npm install --save-exact pele  # 完全一致で固定し package.json / package-lock.json をコミット
npm run diagrams               # docs/diagrams/svg/*.svg を生成
```

代替: 公式 Playground で `src/*.mmd` を貼り付け、Copy SVG で `svg/` に保存(公開情報のみを入力すること)。

## 生成後の確認チェックリスト(未実施)

- [ ] 日本語の文字化け・欠け・文字切れ
- [ ] 矢印の向きと接続
- [ ] スマホ幅(約375px)での縮小表示と可読性
- [ ] ライト/ダーク背景での視認性
- [ ] README・各文書に `![代替テキスト](...)` で相対リンクし、編集元リンクと文章説明を併記

## 暫定プレビュー

### 構成比較(`src/plan-comparison.mmd`)

```mermaid
flowchart TB
    start["現行: Ryzen 7 5800X / RTX 3070 8GB<br/>(文書上の情報・実機未確認)"]
    start --> small["小: 9800X3D + RTX 5070 Ti 16GB<br/>RAM 32〜64GB / 約52〜58万円"]
    start --> mid["中: 9850X3D + RTX 5080 16GB<br/>RAM 64GB / 約67万円"]
    start --> large["大: 9950X3D + RTX 5090 32GB<br/>RAM 64GB / 約158万円(非推奨)"]
    start --> stage["段階購入C: 新基盤 + 3070で先行<br/>GPUは公式PC要件の確認後 / 約30〜37万円"]
    small --> rec["現時点の推奨: 小 + 3070は旧PCに残す(B)"]
    stage --> rec2["PC版の公式情報が出ない/GPU高騰時の保険"]
    mid --> note["VRAMは5070 Tiと同じ16GB<br/>差額は主にゲーム性能向け"]
    large --> warn["価格・在庫・電源・設置電力の制約が大きい"]
```

文章説明: 現行機から小・中・大・段階購入の4案に分岐。現時点では「小 + 3070を旧PCに残す(案B)」を推奨し、段階購入はPC版公式情報が出ない場合やGPU高騰時の保険。

### 2GPUの役割・接続(`src/dual-gpu-roles.mmd`)

```mermaid
flowchart LR
    subgraph NEW["新PC案A: 2GPU同居(独立運用)"]
        CPU["Ryzen 9000 CPU"] -- "PCIe 5.0 x16<br/>(CPU直結)" --> G1["新GPU (RTX 5070 Ti 等)<br/>役割: ゲーム・主力AI"]
        CPU --> CH["チップセット (B850等)"]
        CH -- "PCIe 4.0 x4<br/>(チップセット経由)" --> G2["RTX 3070 8GB<br/>役割: 軽量AI・補助"]
    end
    subgraph OLD["案B: 旧PCに3070を残す"]
        OPC["旧PC (5800X)"] --> G3["RTX 3070 8GB<br/>役割: AI用の別マシン"]
    end
    PSU["電源: 2GPU+CPU+余裕から再計算<br/>(単GPU推奨値の流用は不可)"] -.-> NEW
    NOTE["SLI/NVLink・VRAM合算・fps倍増は前提にしない<br/>LLM分散はソフト対応/PCIe/異種GPUに依存"] -.-> NEW
```

文章説明: 案Aでは新GPUをCPU直結x16、3070をチップセット経由のx4スロットに載せ、ゲームと軽量AIを独立運用する。案Bは3070を旧PCに残すだけでPCIe・電源・熱の制約が発生しない。

### 移行ロードマップ(`src/roadmap.mmd`)

```mermaid
gantt
    title 移行ロードマップ(計画。すべて未実施)
    dateFormat YYYY-MM-DD
    axisFormat %Y/%m
    section 確認と判断
    用途・予算・現行機の確認       :a1, 2026-10-22, 2026-11-30
    GTA VI PC公式情報の監視         :a2, 2026-11-19, 2027-03-31
    公式発表の確認(未発表品は除外)   :a3, 2027-01-01, 2027-02-15
    section 調達
    再見積もり(同日・税込・納期)    :b1, 2027-02-15, 2027-03-15
    発注期限(遅くとも3月末)         :crit, b2, 2027-03-15, 2027-03-31
    納品・初期不良確認              :b3, 2027-04-01, 2027-04-10
    section 移行
    バックアップ・新規OSセットアップ :c1, 2027-04-01, 2027-04-12
    開発/AIツール移行・並行稼働      :c2, 2027-04-10, 2027-04-30
    旧PC保持・切り戻し期間           :c3, 2027-04-10, 2027-05-31
```

文章説明: 2026年末までに用途・予算・現行機を確認し、2027年2〜3月に再見積もり、3月末を発注期限、4月に納品・移行・並行稼働を行う。旧PCは検証完了まで消去せず、切り戻し期間を5月末まで残す。
