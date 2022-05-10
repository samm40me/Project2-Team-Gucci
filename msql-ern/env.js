<span class="token keyword">const</span> env <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">'loizenaidb'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">'12345'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">'localhost'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dialect</span><span class="token operator">:</span> <span class="token string">'mysql'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pool</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">acquire</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">idle</span><span class="token operator">:</span> <span class="token number">10000</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> env<span class="token punctuation">;</span>