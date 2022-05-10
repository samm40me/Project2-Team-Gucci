<span class="token keyword">const</span> env <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./env.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">const</span> Sequelize <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'sequelize'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span>database<span class="token punctuation">,</span> env<span class="token punctuation">.</span>username<span class="token punctuation">,</span> env<span class="token punctuation">.</span>password<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> env<span class="token punctuation">.</span>host<span class="token punctuation">,</span>
  <span class="token literal-property property">dialect</span><span class="token operator">:</span> env<span class="token punctuation">.</span>dialect<span class="token punctuation">,</span>
  <span class="token literal-property property">operatorsAliases</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
 
  <span class="token literal-property property">pool</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> env<span class="token punctuation">.</span>max<span class="token punctuation">,</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> env<span class="token punctuation">.</span>pool<span class="token punctuation">.</span>min<span class="token punctuation">,</span>
    <span class="token literal-property property">acquire</span><span class="token operator">:</span> env<span class="token punctuation">.</span>pool<span class="token punctuation">.</span>acquire<span class="token punctuation">,</span>
    <span class="token literal-property property">idle</span><span class="token operator">:</span> env<span class="token punctuation">.</span>pool<span class="token punctuation">.</span>idle
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

db<span class="token punctuation">.</span>Sequelize <span class="token operator">=</span> Sequelize<span class="token punctuation">;</span>
db<span class="token punctuation">.</span>sequelize <span class="token operator">=</span> sequelize<span class="token punctuation">;</span>
 
db<span class="token punctuation">.</span>Customer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../models/customer.model.js'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>sequelize<span class="token punctuation">,</span> Sequelize<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> db<span class="token punctuation">;</span>