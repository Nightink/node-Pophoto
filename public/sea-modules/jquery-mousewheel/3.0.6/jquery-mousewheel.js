define("#jquery-mousewheel/3.0.6/jquery-mousewheel",["#/jquery/1.7.2/jquery"],function(a,b,c){var d,e,f;c.exports=function(b){return b&&b.fn&&b.fn.jquery?d=e=b:d||(f=a("#/jquery/1.7.2/jquery"),d=e=f.sub()),function(a){function e(b){var d=b||window.event,e=[].slice.call(arguments,1),f=0,h=0,i=0;return b=a.event.fix(d),b.type="mousewheel",d.wheelDelta&&(f=d.wheelDelta/120),d.detail&&(f=-d.detail/3),i=f,void 0!==d.axis&&d.axis===d.HORIZONTAL_AXIS&&(i=0,h=-1*f),void 0!==d.wheelDeltaY&&(i=d.wheelDeltaY/120),void 0!==d.wheelDeltaX&&(h=-1*d.wheelDeltaX/120),e.unshift(b,f,h,i),(c.dispatch||c.handle).apply(this,e)}var b=["DOMMouseScroll","mousewheel"],c=a.superclass&&a.superclass.event||a.event;if(c.fixHooks)for(var d=b.length;d;)c.fixHooks[b[--d]]=c.mouseHooks;c.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],e,!1);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],e,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}(e),e}});