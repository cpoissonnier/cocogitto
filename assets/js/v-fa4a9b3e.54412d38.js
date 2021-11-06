"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[614],{5391:(e,o,a)=>{a.r(o),a.d(o,{default:()=>f});var t=a(6252);const n=(0,t.uE)('<h1 id="managing-commit-history" tabindex="-1"><a class="header-anchor" href="#managing-commit-history" aria-hidden="true">#</a> Managing commit history</h1><p><code>cog</code> as several subcommands to examine and manipulate your commit history.</p><h2 id="validate-repository-history-compliance-with-the-specification" tabindex="-1"><a class="header-anchor" href="#validate-repository-history-compliance-with-the-specification" aria-hidden="true">#</a> Validate repository history compliance with the specification</h2><p>Running <code>cog check</code> will check your commit history against the conventional commit specification :</p><div class="language-text ext-text"><pre class="language-text"><code>❯ cog check\nNo errored commits\n</code></pre></div><p>Let us create an invalid commit :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> commit -m <span class="token string">&quot;Your Mother Was A Hamster, And Your Father Smelt Of Elderberries&quot;</span>\n</code></pre></div><p>And check our commit history again :</p><div class="language-text ext-text"><pre class="language-text"><code>❯ cog check\nError: ERROR - Your Mother Was A Hamster, And Your Father Smelt Of Elderberries - (c2bb56)\n\tcause: Missing commit type separator `:\n</code></pre></div><p>Additionally, you can check your history, starting from the latest tag to HEAD using <code>from-latest-tag</code> flag.<br> This is useful when your git repo started to use conventional commits from a certain point in history, and you don&#39;t care about editing old commits.</p><h2 id="rewrite-non-compliant-commits" tabindex="-1"><a class="header-anchor" href="#rewrite-non-compliant-commits" aria-hidden="true">#</a> Rewrite non-compliant commits</h2><p>Once you have spotted invalid commits you can quickly fix your commit history by running <code>cog edit</code>. This will perform an automatic rebase and let you edit each malformed commit message with your <code>$EDITOR</code> of choice.</p><p><strong>Example :</strong></p><p><code>cog edit</code> will cycle to each malformed commit to rewrite their message :</p><div class="language-text ext-text"><pre class="language-text"><code># Editing commit c2bb56b93821ff34282f322be4d2231f53b9ada8\n# Replace this message with a conventional commit compliant one\n# Save and exit to edit the next errored commit\nYour Mother Was A Hamster, And Your Father Smelt Of Elderberries\n</code></pre></div><p>⚠️ Beware that using <code>cog edit</code> will modify your commit history and change the commit SHA of edited commit and their child.</p><h2 id="conventional-commits-git-log" tabindex="-1"><a class="header-anchor" href="#conventional-commits-git-log" aria-hidden="true">#</a> Conventional commits git log</h2><p><code>cog log</code> is like <code>git log</code> but it displays additional conventional commit information, such as commit scope, commit type etc.</p>',18),i={href:"https://asciinema.org/a/ssH4yRSlc28Rb9dHEDN7TowGe",target:"_blank",rel:"noopener noreferrer"},c=(0,t._)("img",{src:"https://asciinema.org/a/ssH4yRSlc28Rb9dHEDN7TowGe.svg",alt:"asciicast"},null,-1),s=(0,t.uE)('<p>You can also filter the log content with the following flags (<code>cog log --help</code>) :</p><ul><li><code>-B</code> : display breaking changes only</li><li><code>-t</code> : filter on commit type</li><li><code>-a</code> : filter on commit author</li><li><code>-s</code> : filter on commit scope</li><li><code>-e</code> : ignore errors</li></ul><p>Those flag can be combined to achieve complex search in your commit history :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cog log --author <span class="token string">&quot;Paul Delafosse&quot;</span> <span class="token string">&quot;Mike Lubinets&quot;</span> --type feat --scope cli --no-error\n</code></pre></div><h3 id="changelog-summary" tabindex="-1"><a class="header-anchor" href="#changelog-summary" aria-hidden="true">#</a> Changelog summary</h3><p>There are two ways to generate changelog with <code>cog</code> :</p>',6),l=(0,t.Uk)("To your repo "),r=(0,t._)("code",null,"CHANGELOG.md",-1),d=(0,t.Uk)(" file with "),m=(0,t._)("code",null,"cog bump",-1),g=(0,t.Uk)(" (see: "),p=(0,t.Uk)("auto bump"),h=(0,t.Uk)(")"),u=(0,t.uE)('<li><p>To stdout with <code>cog changelog</code>.</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>❯ cog changelog\n\n<span class="token title important"><span class="token punctuation">##</span> 0.30.0..HEAD - 2020-09-30</span>\n\n\n<span class="token title important"><span class="token punctuation">###</span> Bug Fixes</span>\n\n7f04a9 - fix ci cross build command bin args - Paul Delafosse\n\n<span class="token title important"><span class="token punctuation">###</span> Features</span>\n\nfc7420 - move check edit to dedicated subcommand and fix rebase - Paul Delafosse\n1028d0 - remove config commit on init existing repo - Paul Delafosse\n\n<span class="token title important"><span class="token punctuation">###</span> Refactoring</span>\n\nd4aa61 - change config name to cog.toml - Paul Delafosse\n</code></pre></div><p>You can specify a custom changelog range or tag like so :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token comment"># Display the changelog between `^1` and `2.0.0`</span>\n  cog changelog --at <span class="token number">2.0</span>.0\n\n  <span class="token comment"># Display the changelog between `8806a5` and `HEAD`</span>\n  <span class="token comment"># Note that shortened git oid are not supported yet for this command</span>\n  cog changelog --from 8806a55727b6c1767cca5d494599623fbb5dd1dd\n\n  <span class="token comment"># Display the changelog between `8806a5` and `1.0.0`</span>\n  cog changelog --from 8806a55727b6c1767cca5d494599623fbb5dd1dd --to <span class="token number">1.0</span>.0é\n</code></pre></div></li>',1),f={render:function(e,o){const a=(0,t.up)("OutboundLink"),f=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[n,(0,t._)("p",null,[(0,t._)("a",i,[c,(0,t.Wm)(a)])]),s,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[l,r,d,m,g,(0,t.Wm)(f,{to:"/guide/versioning.html#auto-bump"},{default:(0,t.w5)((()=>[p])),_:1}),h])]),u])],64)}}},3184:(e,o,a)=>{a.r(o),a.d(o,{data:()=>t});const t={key:"v-fa4a9b3e",path:"/guide/commit_history.html",title:"Managing commit history",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Validate repository history compliance with the specification",slug:"validate-repository-history-compliance-with-the-specification",children:[]},{level:2,title:"Rewrite non-compliant commits",slug:"rewrite-non-compliant-commits",children:[]},{level:2,title:"Conventional commits git log",slug:"conventional-commits-git-log",children:[{level:3,title:"Changelog summary",slug:"changelog-summary",children:[]}]}],filePathRelative:"guide/commit_history.md",git:{contributors:[{name:"Paul Delafosse",email:"paul.delafosse@protonmail.com",commits:1}]}}}}]);