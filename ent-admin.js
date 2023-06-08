!function($){$.fn.myFrameWorkSelectMultiple=function(){return this.each(function(){var b,c,d,e,a=$(this);a.hide(),a.wrap("<div class='mfw_select_multiple_wrapper'></div>"),b=a.parent(),c='<ul id="'+a.attr("id")+'" class="mfw_select_multiple">',d=a.find("option"),d.each(function(){$(this).attr("selected")?c+='<li class="selected" data-value="'+$(this).val()+'">'+$(this).text()+"</li>":c+='<li data-value="'+$(this).val()+'">'+$(this).text()+"</li>"}),c+="</ul>",b.append(c),e=b.find(".mfw_select_multiple li"),e.on("click",function(b){b.shiftKey||b.ctrlKey||b.metaKey?$(this).hasClass("selected")?($(this).removeClass("selected"),a.find("option[value="+$(this).data("value")+"]").removeAttr("selected")):($(this).addClass("selected"),a.find("option[value="+$(this).data("value")+"]").attr("selected",!0)):(e.removeClass("selected"),d.removeAttr("selected"),$(this).addClass("selected"),a.find("option[value="+$(this).data("value")+"]").attr("selected",!0))})})},$.fn.myFrameWorkTabs=function(){return this.each(function(){var a=$(this),b=a.find(".mfw_tabs-nav-item"),e=a.find(".mfw_content"),f=a.find(".mfw_tabs_container"),g=a.find(".mfw_tab"),h=a.find(".mfw_tabs-nav_hightlight"),c=a.find(".mfw_accordion_toggle"),i=null,j=null,k=null,l=0;function d(){i=b.eq(l).position(),j=h.position(),k=null,i.left>j.left?k=Math.abs(j.left-i.left)+b.eq(l).outerWidth(!0):(k=j.left-i.left+h.outerWidth(!0),j=i),0===k&&(k=b.eq(l).outerWidth(!0)),h.stop(!0,!1).animate({left:j.left,width:k},250,"easeOutQuint"),e.stop(!0,!1).animate({height:g.eq(l).outerHeight(!0),overflow:"hidden"},250,"easeOutQuint",function(){f.stop(!0,!0).animate({left:-e.outerWidth(!0)*l},250,"easeOutQuint",function(){e.css({overflow:"visible"})}),h.stop(!0,!0).animate({left:b.eq(l).position().left,width:b.eq(l).outerWidth(!0)},250,"easeOutQuart")})}d(),$(window).on("resize",function(){d()}),b.on("click",function(){l=$(this).index(),b.removeClass("active"),$(this).addClass("active"),d()}),c.on("click",function(){$(this).hasClass("open")?$(this).removeClass("open"):(c.removeClass("open"),$(this).addClass("open")),d()})})}}(jQuery)


  jQuery(document).ready(function($) {
    // FOCUS ON FIELD
    $(".mfw_heading").on("click", function() {
      var id = $(this).data("for");
      $("#" + id).trigger('focus');
      if($("#" + id).attr("type") == 'checkbox') {
        $("#" + id).prop('checked', !$("#" + id).prop('checked'));
      }
      if($("#" + id).hasClass("mfw_color")) {
        $("#" + id).click();
      }
    });
    // IF VALUE MORE THEN MAX
    $(".mfw_col input[type='number']").on("keyup", function() {
      var curValue = parseInt($(this).val()), maxVal = parseInt($(this).attr('max'));
      if(curValue > maxVal) {
        $(this).val(maxVal);
      }
    });
    // SELECT LOGO
    $("#label-logo_button").on("click", function() {
      var image = wp.media({ 
        title: 'Upload Image',
        multiple: false
      }).open().on('select', function(e){
        // This will return the selected image from the Media Uploader, the result is an object
        var uploaded_image = image.state().get('selection').first();
        // We convert uploaded_image to a JSON object to make accessing it easier
        // Output to the console uploaded_image
        var image_url = uploaded_image.toJSON().url;
        // Let's assign the url value to the input field
        $('#label-logo').val(image_url);
        $('#label-logo').next().attr("src", image_url);
        $('#label-logo').parent().removeClass("noimage");
      });
    });
    // REMOVE LOGO
    $(".mfw_remove_image").on("click", function() {
      var $container = $(this).parent();
      $container.addClass("noimage");
      $container.find("input").val("");
    });
    
    function getSettings() {
      var news, updateNews, i;
      settings = {
        "position": $("#position").val(),
        "height": parseInt($("#height").val()),
        "theme":  $("#theme").val(),
        "margin": $("#margin").val(),
        "roundness": parseInt($("#roundness").val()),
        "shadow": {
          "enable": $("#shadow-enable").is(":checked"),
          "type": $("#shadow-type").val(),
          "reverse": $("#shadow-reverse").is(":checked"),
        },
        "animation": {
          "effect": $("#animation-effect").val(),
          "scroll_speed": parseInt($("#animation-scroll_speed").val()),
          "easing": $("#animation-easing").val(),
          "duration": parseInt($("#animation-duration").val()),
          "delay": parseInt($("#animation-delay").val())
        },
        "data": null,
        "label": {
          "onMobile": {
            "enable": $("#label-onMobile-enable").is(":checked"),
          },
          "enable": $("#label-enable").is(":checked"),
          "padding": $("#label-padding").val(),
          "fontFamily": $('#label-fontFamily').val(),
          "fontSize": parseInt($("#label-fontSize").val()),
          "fontWeight": $("#label-fontWeight").val(),
          "background": $("#label-background").val(),
          "color": $("#label-color").val(),
          "text": $("#label-text").val(),
          "logo": $("#label-logo").val()
        },
        "news": {
          "background": $("#news-background").val(),
          "padding": $("#news-padding").val(),
          "prefix": {
            "enable": $("#news-prefix-enable").is(":checked"),
            "fontFamily": $('#news-prefix-fontFamily').val(),
            "fontSize": parseInt($("#news-prefix-fontSize").val()),
            "fontWeight": $("#news-prefix-fontWeight").val(),
            "background": $('#news-prefix-background').val(),
            "color": $('#news-prefix-color').val(),
            "roundness": parseInt($("#news-prefix-roundness").val()),
            "padding": $('#news-prefix-padding').val()
          },
          "date": {
            "enable": $("#news-date-enable").is(":checked"),
            "fontFamily": $('#news-date-fontFamily').val(),
            "fontSize": parseInt($("#news-date-fontSize").val()),
            "fontWeight": $("#news-date-fontWeight").val(),
            "background": $("#news-date-background").val(),
            "color": $("#news-date-color").val(),
            "roundness": parseInt($("#news-date-roundness").val()),
            "padding": $("#news-date-padding").val(),
          },
          "heading": {
            "color": $("#news-heading-color").val(),
            "fontFamily": $('#news-heading-fontFamily').val(),
            "fontSize": parseInt($("#news-heading-fontSize").val()),
            "fontWeight": $("#news-heading-fontWeight").val(),
          },
          "separator": {
            "size": parseInt($("#news-separator-size").val()),
            "background": $("#news-separator-background").val(),
          },
        },
        "navigation": {
          "onMobile": {
            "enable": $("#navigation-onMobile-enable").is(":checked"),
          },
          "enable": $("#navigation-enable").is(":checked"),
          "autohide": $("#navigation-autohide").is(":checked"),
          "padding": $("#navigation-padding").val(),
          "background": $("#navigation-background").val(),
          "color": $("#navigation-color").val(),
          "hover": $("#navigation-hover").val(),
        },
      };
      
      news = [{
        "date": "June 23, 2022",
        "prefix": "CNN: World",
        "heading": "A Muslim teenager was killed at a protest in India. His family wants answers.",
        "url": "https://edition.cnn.com/2022/06/22/india/muslim-teenager-shot-islam-protest-police-intl-hnk-dst/index.html"
      }, {
        "date": "June 23, 2022",
        "prefix": "CNN: US Politics",
        "heading": "Biden administration agrees to cancel another $6 billion in student loan debt for defrauded borrowers.",
        "url": "https://edition.cnn.com/2022/06/23/politics/biden-student-loan-debt-cancellation-borrower-defense/index.html"
      }, {
        "date": "26.05.2022 10:32",
        "prefix": "CNN: Buisiness",
        "heading": "Black former Tesla contractor turned down $15 million award in racial harassment suit, likely setting up new trial.",
        "url": "https://edition.cnn.com/2022/06/22/business/california-tesla-racism-lawsuit/index.html"
      }, {
        "date": "June 23, 2022",
        "prefix": "BBC: Climate",
        "heading": "Just Stop Oil: Activists says they have 'a duty to protest'.",
        "url": "https://www.bbc.com/news/newsbeat-61635328"
      }, {
        "date": "June 23, 2022",
        "prefix": "BBC: Science",
        "heading": "Five major planets to line up in rare planetary conjunction.",
        "url": "https://www.bbc.com/news/science-environment-61910977"
      }];

      updateNews = news;

      if(!settings.news.prefix.enable) {
        for(i = 0; i < updateNews.length; i++){
          delete updateNews[i].prefix;
        }
      }
      if(!settings.news.date.enable) {
        for(i = 0; i < updateNews.length; i++){
          delete updateNews[i].date;
        }
      }
      settings.data = updateNews;
    }

    var settings, themes;
    themes = [{
      "label": {
        "background": "#DA0037",
        "color": "#EEE",
      },
      "news": {
        "background": "#EEE",
        "heading": {
          "color": "#171717",
        },
        "separator": {
          "background": "#DA0037"
        },
        "prefix": {
          "background": "#444",
          "color": "#EEE",
        },
        "date": {
          "background": "none",
          "color": "#444",
        }
      },
      "navigation": {
        "background": "#171717",
        "color": "#EEE",
        "hover": "#EEE"
      }
    }, {
      "label": {
        "background": "#DA0037",
        "color": "#EEE",
      },
      "news": {
        "background": "#171717",
        "heading": {
          "color": "#EEE",
        },
        "separator": {
          "background": "#DA0037"
        },
        "prefix": {
          "background": "#DA0037",
          "color": "#EEE",
        },
        "date": {
          "background": "none",
          "color": "#EEE",
        }
      },
      "navigation": {
        "background": "#EEEEEE",
        "color": "#171717",
        "hover": "#171717"
      }
    }, {
      "label": {
        "background": "#1B1A17",
        "color": "#F0A500",
      },
      "news": {
        "background": "#F0A500",
        "heading": {
          "color": "#1B1A17",
        },
        "separator": {
          "background": "#1B1A17"
        },
        "prefix": {
          "background": "#1B1A17",
          "color": "#F0A500",
        },
        "date": {
          "background": "none",
          "color": "#1B1A17",
        }
      },
      "navigation": {
        "background": "#1B1A17",
        "color": "#EEE",
        "hover": "#F0A500"
      }
    }, {
      "label": {
        "background": "#F0A500",
        "color": "#1B1A17",
      },
      "news": {
        "background": "#1B1A17",
        "heading": {
          "color": "#EEE",
        },
        "separator": {
          "background": "#F0A500"
        },
        "prefix": {
          "background": "#EEE",
          "color": "#1B1A17",
        },
        "date": {
          "background": "none",
          "color": "#F0A500",
        }
      },
      "navigation": {
        "background": "#EEE",
        "color": "#1B1A17",
        "hover": "#F0A500"
      }
    }, {
      "label": {
        "background": "#222831",
        "color": "#EEE",
      },
      "news": {
        "background": "#00ADB5",
        "heading": {
          "color": "#222831",
        },
        "separator": {
          "background": "#222831"
        },
        "prefix": {
          "background": "#EEE",
          "color": "#00ADB5",
        },
        "date": {
          "background": "none",
          "color": "#222831",
        }
      },
      "navigation": {
        "background": "#222831",
        "color": "#EEE",
        "hover": "#00ADB5"
      }
    }, {
      "label": {
        "background": "#00ADB5",
        "color": "#EEE",
      },
      "news": {
        "background": "#222831",
        "heading": {
          "color": "#EEE",
        },
        "separator": {
          "background": "#00ADB5"
        },
        "prefix": {
          "background": "#EEE",
          "color": "#00ADB5",
        },
        "date": {
          "background": "none",
          "color": "#EEE",
        }
      },
      "navigation": {
        "background": "#EEE",
        "color": "#222831",
        "hover": "#00ADB5"
      }
    }, {
      "label": {
        "background": "#FF5722",
        "color": "#EEE",
      },
      "news": {
        "background": "#303841",
        "heading": {
          "color": "#EEE",
        },
        "separator": {
          "background": "#FF5722"
        },
        "prefix": {
          "background": "#00ADB5",
          "color": "#EEE",
        },
        "date": {
          "background": "none",
          "color": "#FF5722",
        }
      },
      "navigation": {
        "background": "#EEE",
        "color": "#303841",
        "hover": "#00ADB5"
      }
    }, {
      "label": {
        "background": "#FF5722",
        "color": "#EEE",
      },
      "news": {
        "background": "#EEEEEE",
        "heading": {
          "color": "#303841",
        },
        "separator": {
          "background": "#FF5722"
        },
        "prefix": {
          "background": "#00ADB5",
          "color": "#EEE",
        },
        "date": {
          "background": "none",
          "color": "#FF5722",
        }
      },
      "navigation": {
        "background": "#303841",
        "color": "#EEE",
        "hover": "#00ADB5"
      }
    }, {
      "label": {
        "background": "#EEE",
        "color": "#FF5722",
      },
      "news": {
        "background": "#FF5722",
        "heading": {
          "color": "#222831",
        },
        "separator": {
          "background": "#222831"
        },
        "prefix": {
          "background": "#222831",
          "color": "#EEE",
        },
        "date": {
          "background": "none",
          "color": "#222831",
        }
      },
      "navigation": {
        "background": "#303841",
        "color": "#EEE",
        "hover": "#FF5722"
      }
    }, {
      "label": {
        "background": "#14274E",
        "color": "#EEE",
      },
      "news": {
        "background": "#F1F6F9",
        "heading": {
          "color": "#14274E",
        },
        "separator": {
          "background": "#9BA4B4"
        },
        "prefix": {
          "background": "#9BA4B4",
          "color": "#EEE",
        },
        "date": {
          "background": "none",
          "color": "#9BA4B4",
        }
      },
      "navigation": {
        "background": "#9BA4B4",
        "color": "#14274E",
        "hover": "#EEE"
      }
    }];

    getSettings();

    $("#ent_wrapper_preview").easyNewsTicker(settings);

    // UPDATE PREVIEW
    $("#update_ent").on("click", function() {
      $("#ent_wrapper_preview").html("").removeClass();
      getSettings();
      $("#ent_wrapper_preview").easyNewsTicker(settings);
    });
    // THEMES CHANGED
    $("#theme").on("change", function() {
      $("#ent_wrapper_preview").html("").removeClass();
      getSettings();
      if(settings.theme != "custom") {
        settings = $.extend(true, settings, themes[settings.theme - 1]);
      }
      $("#ent_wrapper_preview").easyNewsTicker(settings);
      $("#label-background").val(themes[settings.theme - 1].label.background).change();
      $("#label-color").val(themes[settings.theme - 1].label.color).change();
      $("#news-background").val(themes[settings.theme - 1].news.background).change();
      $("#news-prefix-background").val(themes[settings.theme - 1].news.prefix.background).change();
      $("#news-prefix-color").val(themes[settings.theme - 1].news.prefix.color).change();
      $("#news-date-background").val(themes[settings.theme - 1].news.date.background).change();
      $("#news-date-color").val(themes[settings.theme - 1].news.date.color).change();
      $("#news-heading-color").val(themes[settings.theme - 1].news.heading.color).change();
      $("#news-separator-background").val(themes[settings.theme - 1].news.separator.background).change();
      $("#navigation-background").val(themes[settings.theme - 1].navigation.background).change();
      $("#navigation-color").val(themes[settings.theme - 1].navigation.color).change();
      $("#navigation-hover").val(themes[settings.theme - 1].navigation.hover).change();
    });

    $(".mfw_tabs_wrapper").myFrameWorkTabs();

    $(".mfw_wrapper select[multiple]").myFrameWorkSelectMultiple();

  });