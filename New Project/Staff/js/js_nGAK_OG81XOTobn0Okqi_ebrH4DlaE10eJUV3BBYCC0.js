(function($){Drupal.behaviors.textResize={attach:function(context){if(text_resize_scope)if($("#"+text_resize_scope).length>0)var element_to_resize=$("#"+text_resize_scope);else if($("."+text_resize_scope).length>0)var element_to_resize=$("."+text_resize_scope);else var element_to_resize=$(text_resize_scope);else if($("DIV.left-corner").length>0)var element_to_resize=$("DIV.left-corner");else if($("#content-inner").length>0)var element_to_resize=$("#content-inner");else if($("#squeeze > #content").length>
0)var element_to_resize=$("#squeeze > #content");if($.cookie("text_resize")!=null)element_to_resize.css("font-size",parseFloat($.cookie("text_resize"))+"px");if(text_resize_line_height_allow)if($.cookie("text_resize_line_height")!=null)element_to_resize.css("line-height",parseFloat($.cookie("text_resize_line_height"))+"px");$("a.changer").click(function(){var currentFontSize=parseFloat(element_to_resize.css("font-size"),10);var current_line_height=parseFloat(element_to_resize.css("line-height"),10);
if(this.id=="text_resize_increase"){var new_font_size=currentFontSize*1.2;if(text_resize_line_height_allow)var new_line_height=current_line_height*1.2;if(new_font_size<=text_resize_maximum){$.cookie("text_resize",new_font_size,{path:"/"});if(text_resize_line_height_allow)$.cookie("text_resize_line_height",new_line_height,{path:"/"});var allow_change=true}else{$.cookie("text_resize",text_resize_maximum,{path:"/"});if(text_resize_line_height_allow)$.cookie("text_resize_line_height",text_resize_line_height_max,
{path:"/"});var reset_size_max=true}}else if(this.id=="text_resize_decrease"){var new_font_size=currentFontSize/1.2;if(text_resize_line_height_allow)var new_line_height=current_line_height/1.2;if(new_font_size>=text_resize_minimum){$.cookie("text_resize",new_font_size,{path:"/"});if(text_resize_line_height_allow)$.cookie("text_resize_line_height",new_line_height,{path:"/"});var allow_change=true}else{$.cookie("text_resize",text_resize_minimum,{path:"/"});if(text_resize_line_height_allow)$.cookie("text_resize_line_height",
text_resize_line_height_min,{path:"/"});var reset_size_min=true}}else if(this.id=="text_resize_reset"){$.cookie("text_resize",null,{path:"/"});if(text_resize_line_height_allow)$.cookie("text_resize_line_height",null,{path:"/"});var reset_size_original=true}if(allow_change==true){element_to_resize.css("font-size",new_font_size+"px");if(text_resize_line_height_allow)element_to_resize.css("line-height",new_line_height+"px");return false}else if(reset_size_min==true){element_to_resize.css("font-size",
text_resize_minimum+"px");if(text_resize_line_height_allow)element_to_resize.css("line-height",text_resize_line_height_min+"px");return false}else if(reset_size_max==true){element_to_resize.css("font-size",text_resize_maximum+"px");if(text_resize_line_height_allow)element_to_resize.css("line-height",text_resize_line_height_max+"px");return false}else if(reset_size_original==true){element_to_resize.css("font-size","");if(text_resize_line_height_allow)element_to_resize.css("line-height","");return false}})}}})(jQuery);;
