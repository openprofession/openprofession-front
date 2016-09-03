// custom jQuery validation
//-----------------------------------------------------------------------------------
var validator = {
  init:          function () {
    $('form').each(function () {
      var name = $(this).attr('name');
      if (valitatorRules.hasOwnProperty(name)) {
        var rules = valitatorRules[name];
        $(this).validate({
          rules:          rules,
          errorElement:   'b',
          errorClass:     'error',
          focusInvalid:   false,
          focusCleanup:   false,
          errorPlacement: function (error, element) {
            validator.setError($(element), error);
          },
          highlight:      function (element, errorClass, validClass) {
            var $el = validator.defineElement($(element));
            if ($el) $el.removeClass(validClass).addClass(errorClass);
          },
          unhighlight:    function (element, errorClass, validClass) {
            var $el = validator.defineElement($(element));
            if ($el) $el.removeClass(errorClass).addClass(validClass);
          },
          messages: {
            email:    {
              required: 'Необходимо заполнить поле E-mail.',
              email:    'E-mail имеет не верный формат'
            },
            password: 'Необходимо заполнить поле Пароль.'
          }
        });
      }
    });
  },
  setError:      function ($el, message) {
    $el = this.defineElement($el);
    if ($el) this.domWorker.error($el, message);
  },
  defineElement: function ($el) {
    return $el.closest('.form-input');
  },
  domWorker:     {
    error: function ($el, message) {
      $el.addClass('error');
      $el.append(message);
    }
  }
};


// rule for form namespace
//-----------------------------------------------------------------------------------
var valitatorRules = {
  // moving form rules
  //-----------------------------------------------------------------------------------
  'sign-up': {
    password:      {
      required: true
    },
    email:     {
      required: true,
      email:    true
    }
  },
  'form-personal-info':{
    name:      {
      required: true
    },
    surname:     {
      required: true
    },
    email:     {
      required: true,
      email:    true
    }
  },
  'change-passw':{
    oldPassword:      {
      required: true
    },
    password:      {
      required: true
    },
  }
};

// custom rules
//-----------------------------------------------------------------------------------
$.validator.addMethod("email", function (value) {
  var regexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return regexp.test(value);
});
// Debounce custom function
//-----------------------------------------------------------------------------------
!function(e){var n,t,i=e.event;n=i.special.debounce={setup:function(){e(this).on("resize",n.handler)},teardown:function(){e(this).off("resize",n.handler)},handler:function(e,o){var r=this,s=arguments,u=function(){e.type="debounce",i.dispatch.apply(r,s)};t&&clearTimeout(t),o?u():t=setTimeout(u,n.threshold)},threshold:150}}(jQuery);