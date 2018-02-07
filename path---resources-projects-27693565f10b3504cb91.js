webpackJsonp([39842668074569],{520:function(s,n){s.exports={data:{markdownRemark:{html:'<h2>Fields</h2>\n<p>Projects allow you to group your team’s work.\nProject resources currently expose the following fields:</p>\n<ul>\n<li>id</li>\n<li>title</li>\n<li>description</li>\n<li>start_date</li>\n<li>end_date</li>\n<li>workgroup</li>\n</ul>\n<h2>Endpoint</h2>\n<h3>GET /projects/</h3>\n<p>Get all projects.</p>\n<h3>GET /projects/&#x3C;uuid:id>/</h3>\n<p>Get a single project by ID.</p>\n<h3>GET /projects/&#x3C;uuid:id>/tasks/</h3>\n<p>List all the available tasks for a specific project</p>\n<h3>GET /projects/&#x3C;uuid:id>/tasks/&#x3C;uuid:id>/</h3>\n<p>Get a single task by ID for a specific project</p>\n<h3>POST /projects/</h3>\n<p>Creates a new project, as shown in this example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"project"</span><span class="token punctuation">,</span>\n    <span class="token property">"attributes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Project title"</span><span class="token punctuation">,</span>\n      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Project description"</span><span class="token punctuation">,</span>\n      <span class="token property">"start_date"</span><span class="token operator">:</span> <span class="token string">"2017-08-14"</span><span class="token punctuation">,</span>\n      <span class="token property">"end_date"</span><span class="token operator">:</span> <span class="token string">"2017-08-20"</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>If you want to create a new project inside a certain workgroup you need to pass the right workgroup_id, for example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"project"</span><span class="token punctuation">,</span>\n    <span class="token property">"attributes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Project with workgroup"</span><span class="token punctuation">,</span>\n      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Project with workgroup"</span><span class="token punctuation">,</span>\n      <span class="token property">"start_date"</span><span class="token operator">:</span> <span class="token string">"2017-08-14"</span><span class="token punctuation">,</span>\n      <span class="token property">"end_date"</span><span class="token operator">:</span> <span class="token string">"2017-08-20"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"relationships"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"workgroup"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"workgroup"</span><span class="token punctuation">,</span> <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',fields:{slug:"/resources/projects/"},frontmatter:{title:"Projects"}}},pathContext:{slug:"/resources/projects/"}}}});
//# sourceMappingURL=path---resources-projects-27693565f10b3504cb91.js.map