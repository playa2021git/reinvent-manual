const steps=[
{title:'困りごとを見つける',goal:'「誰が・いつ・何に困るか」を具体的にする。',tasks:['自分や身近な人の生活から、困る場面を3つ書く。','ひとつ選び、本人に聞いたり様子を観察したりする。自分の困りごとでもOK。','今の解決方法や似た製品を調べ、何が足りないかを考える。'],output:'「○○さんが、○○のとき、○○に困る。今は○○しているが、○○が足りない」というメモ。',help:'思いつかなければ、「忘れる・気づかない・面倒」の場面から。友達や家族、アイデア相談Gemにも相談できます。'},
{title:'製品と部品を考える',goal:'困りごとと、入力・判断・出力を結びつける。',tasks:['「○○を感知したら、○○する」と中心の働きを一文にする。','デバイスガイドから、入力に使うセンサと出力に使う部品を選び、理由を書く。内蔵センサやLEDでもOK。','人・置く場所・大きさ・電源・使い方がわかる図を描く。手描きでもAIでも、実際の案と合っているか確かめる。'],output:'製品の使用場面の図、部品名と数、選んだ理由。',help:'一覧にない機材は用意されません。代わりの方法はGemに相談し、先生に確認しよう。',link:'https://playa2021git.github.io/reinvent-device-guide/',label:'使えるデバイスを見る'},
{
  title:'つくって、動かす',
  goal:'再発明のプログラムは、主に<a href="https://playa2021git.github.io/block2script/" target="_blank" rel="noopener">Block2Script ↗</a>で開発します。',
  tasks:[
    '<a href="https://playa2021git.github.io/block2script-prompt-builder/#step3" target="_blank" rel="noopener">プロンプトメーカー ↗</a>を開くと「AI・音声機能」が表示される。初めてなら「何を作りたい？」から、作品の目的・部品・動く条件を入力し、「指示文をつくる」→「指示文をコピー」を押す。',
    '<a href="https://gemini.google.com/gem/1mhp96TwFjUHCl3A1Huhec0TExXFE9I1P?usp=sharing" target="_blank" rel="noopener">コード生成Gem ↗</a>に指示文を貼り、生成されたBlock2Script用のコードをコピーする。',
    '<a href="https://playa2021git.github.io/block2script/" target="_blank" rel="noopener">Block2Script ↗</a>にコードを貼り、「検証」→「Scratchへ反映」の順に押す。デバイスガイドに沿って機材を接続し、緑の旗で実行する。',
    'センサの値、出力する部品の動き、両方をつなぐ条件の順に確かめる。Teachable Machineを使う場合は、Classごとに意図した出力になるか試す。',
    '反映した作品に名前を付け、.sb3で保存する。学習モデルを公開するときは先生に確認し、モデルURLを指定の場所に記録する。'
  ],
  output:'接続した試作品、保存したプログラム、モデルURL（使用した場合）。',
  help:'予想と違う動きをしたら、試した条件・予想・実際の結果を先生やコード生成Gemに伝えよう。本体だけで動かす場合はMakeCodeも使えます。使う部品や接続方法はデバイスガイドで確認しよう。',
  link:'https://playa2021git.github.io/reinvent-device-guide/',label:'デバイスガイドを開く'
},
{title:'試して、よくする',goal:'目的に合う動作を確かめ、結果から改善する。',tasks:['「どんな入力で、どう動けば成功か」を先に決める。','実際の使用場面を想定して試し、条件と結果を記録する。明るさや距離などを変えたときも確認する。','うまくいったこと・いかなかったことと原因を考える。必要な改良を加え、もう一度試す。','入力と反応が両方見える動画を撮る。撮影する人には許可を取る。'],output:'動作動画と「条件／予想／結果／考察・改良」の記録。',help:'失敗を無理に作る必要はありません。意図どおりなら、どんな条件で確認したかを書こう。動かない部分も隠さず、できた部分と分けて記録します。'},
{title:'製品の価値を整理する',goal:'何を解決できたか、根拠と限界を説明する。',tasks:['困りごとに対して、試作品がどこまで役立つかを動画や実験結果と結びつける。','部品名・数量を整理する。価格ガイド配布後に単価と合計を記入し、ケース・電源など含めた物を明記する。','今回できた機能と今後の案を分ける。一覧にない部品を使う将来案も、考察として書いてOK。'],output:'うまくいったこと、残る課題、改善案、1台分の部品代の概算。',help:'価格ガイドは後日配布予定です。今は部品名と数量を残しておこう。AIが出した価格は、そのまま確定情報にしないでください。'},
{title:'伝わる発表にする',goal:'聞き手が、製品が役立つ理由を納得できる発表にする。',tasks:['先生のスライドテンプレートに沿って内容を整理する。','完成したコードを<a href="https://gemini.google.com/gem/1SZXBRvYbbDHWhJm1Mq3AFjjx2H1G8-nx?usp=sharing" target="_blank" rel="noopener">プログラム解説図Gem ↗</a>に渡し、「このプログラムが何を受け取り、どう判断し、何を動かすか」を示す解説図を作る。',
'解説図の条件と動作を自分のコード・実機の結果と照らし合わせ、違うところを直す。発表スライドに図と動作動画を載せ、誰にどう役立つかを説明する。','技術の選定理由、結果の分析、改良と残る課題を説明する。','「なぜその部品？」「うまくいかなかったことと対処は？」に答えられるか確認する。'],output:'指定テンプレートに沿った発表スライド。',help:'話し方の上手さだけで決まりません。図・動画・記録で根拠を伝えよう。テンプレートの詳細項目は原本確認後に反映します。',link:'https://docs.google.com/presentation/d/1FRSO_PMLDYnaBy1WB1jjiMz7o4ItDdiAOTSiTwyecWs/edit',label:'発表テンプレートを開く'}
];
const developmentScreens = [
  {image:'prompt', label:'① 指示文をコピー', caption:'ステップ6で指示文を作り、結果欄の右上にある「指示文をコピー」を押します。'},
  {image:'gem', label:'② Gemに貼り付け', caption:'コード生成Gemを開き、入力欄に Ctrl + V で貼り付けてから送信します。画像は未ログインのGeminiで貼り付けを再現したものです。'},
  {image:'block2script', label:'③ 検証して実行', caption:'右側のScript欄に生成コードを貼り、「検証」→「Scratchへ反映」。中央上部の緑の旗で実行します。画面は連動サンプルです。'}
];

const dialog = document.querySelector('#step-dialog');
const stepTitle = document.querySelector('#step-title');
const stepContent = document.querySelector('#dialog-content');
const previousStep = document.querySelector('#previous-step');
const nextStep = document.querySelector('#next-step');
let currentStep = 0;

function showStep(index) {
  const step = steps[index];
  currentStep = index;
  document.querySelector('#step-position').textContent = `STEP ${String(index + 1).padStart(2, '0')} / ${steps.length}`;
  stepTitle.textContent = step.title;
  stepContent.innerHTML = `
    <div class="step-instructions"><p class="step-goal">${step.goal}</p>
    <h3>やること</h3>
    <ol>${step.tasks.map(task => `<li>${task}</li>`).join('')}</ol>
    <div class="output"><b>ここまでできたら残すもの</b><p>${step.output}</p></div>
    <h3>困ったときは</h3><p>${step.help}</p>
    ${step.link ? `<a href="${step.link}" target="_blank" rel="noopener">${step.label} ↗</a>` : ''}</div>
  `;
  if (index === 2) {
    stepContent.insertAdjacentHTML('afterbegin', `
      <aside class="development-screens" aria-label="操作画面">
        <div class="screen-buttons" role="group" aria-label="見る画面を選ぶ">
          ${developmentScreens.map(({label}, i) => `<button type="button" data-screen="${i}" aria-pressed="${i === 0}">${label}</button>`).join('')}
        </div>
        ${developmentScreens.map(({image, label, caption}, i) => `
          <figure ${i ? 'hidden' : ''}>
            <a href="assets/guide-${image}.jpg" target="_blank" rel="noopener" aria-label="${label}の画像を拡大（別タブ）">
              <img src="assets/guide-${image}.jpg" width="1366" height="768" alt="${label}の操作画面">
            </a>
            <figcaption>${caption} 画像をクリックすると拡大できます。</figcaption>
          </figure>
        `).join('')}
      </aside>`);
    const screens = stepContent.querySelector('.development-screens');
    const screenButtons = [...screens.querySelectorAll('button')];
    const figures = [...screens.querySelectorAll('figure')];
    screenButtons.forEach((button, selected) => button.addEventListener('click', () => {
      screenButtons.forEach((item, i) => {
        item.setAttribute('aria-pressed', String(i === selected));
        figures[i].hidden = i !== selected;
      });
    }));
  }
  stepContent.classList.toggle('with-screens', index === 2);
  dialog.classList.toggle('with-screens', index === 2);
  previousStep.disabled = index === 0;
  nextStep.textContent = index === steps.length - 1 ? '閉じる' : '次の手順 →';
  if (!dialog.open) dialog.showModal();
  stepContent.scrollTop = 0;
  stepTitle.focus({preventScroll: true});
}

document.querySelectorAll('[data-step]').forEach(button => {
  button.addEventListener('click', () => showStep(Number(button.dataset.step)));
});
previousStep.addEventListener('click', () => showStep(currentStep - 1));
nextStep.addEventListener('click', () => {
  if (currentStep === steps.length - 1) dialog.close();
  else showStep(currentStep + 1);
});
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
const checks=[...document.querySelectorAll('[data-save]')];checks.forEach(c=>{try{c.checked=localStorage.getItem('reinvent-'+c.dataset.save)==='true'}catch{}c.addEventListener('change',()=>{try{localStorage.setItem('reinvent-'+c.dataset.save,c.checked)}catch{}})});document.querySelector('#reset-checks').addEventListener('click',()=>checks.forEach(c=>{c.checked=false;c.dispatchEvent(new Event('change'))}));
if('IntersectionObserver'in window){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.step-card,.section-heading,.flow,.eval-grid article').forEach(el=>{el.classList.add('reveal');obs.observe(el)})}

const examples={
light:{story:'困りごと：引き出しが開いたことに気づけない。まずは「開いたら知らせる」機能を試す。',input:['☀ INPUT','明るさを調べる','micro:bitのLEDを利用する明るさセンサで、引き出しの中の値を読む。外付けのセンサは不要。'],decision:['▦ PROCESS','値と条件を比べる','実験で決めた明るさを超えたら「開いた」と判断する。'],output:['✦ OUTPUT','LEDで知らせる','開いたときにLEDを表示し、閉じたら消す。'],verify:'動作確認：閉じたときと開いたときで値を比べ、LEDの表示が変わるか試す。暗い部屋ではどうなるかも確かめよう。LEDが見える設置場所や、開閉の検知と侵入防止の違いも考えよう。'},
ai:{story:'困りごと：机の決めた場所に、必要な持ち物があるかを確認したい。画像を見分けて表示を変える。',input:['▧ INPUT','カメラで画像を映す','Teachable Machineで「持ち物あり」「なし」のClassを学習する。'],decision:['▦ PROCESS','Classを判定する','対応する開発環境で判定結果を受け取り、Classに応じて処理を分ける。'],output:['✦ OUTPUT','表示を変える','「あり」ならmicro:bitに✓、「なし」なら×を表示する。'],verify:'動作確認：指定Classの画像を映すと、それに応じてmicro:bitの表示が変わるか確かめる。画像の判定だけで止めず、実物の出力まで確認しよう。'}
};
const tabs=[...document.querySelectorAll('[data-example]')];
function selectExample(key){const e=examples[key];document.querySelector('#example-panel').setAttribute('aria-labelledby','tab-'+key);document.querySelector('#example-panel').innerHTML=`<div class="example-story"><p>${e.story}</p><div class="signal-flow">${[e.input,e.decision,e.output].map((node,i)=>`${i?'<span class="signal-arrow" aria-hidden="true">→</span>':''}<div class="signal-node ${i===2?'output-node':''}"><span>${node[0]}</span><h3>${node[1]}</h3><p>${node[2]}</p></div>`).join('')}</div><p class="example-verify"><b>確かめること</b><br>${e.verify}</p></div>`;tabs.forEach(t=>{const selected=t.dataset.example===key;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1})}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectExample(tab.dataset.example));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(index+1)%tabs.length;else if(e.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();selectExample(tabs[next].dataset.example);tabs[next].focus()})});selectExample('light');
