const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
const þ = console.log;

let pf = {
   inputForm: $$('.input-form'),
   lblForm: $$('.lbl-form'),
   lineForm: $$('.line-form'),
   textarea: $('.textarea-form'),
   lblMensaje: $('.lbl-mensaje')
}

let focusStyle = `
transition: .4s;
bottom: 65px;
color: #303030;
cursor: default;
`;

let blurStyle = `
transition: .4s;
bottom: 18px;
color: #9b9b9b;
cursor: text;
`;

let lineFocus = `
left: 0px;
transition: .4s;
`;

let lineBlur = `
left: -100%px;
transition: .4s;
`;

let mf = {

   focus: () => {

      pf.inputForm.forEach( e => {
         
         e.addEventListener(
            'focus',
            mf.inputFocus
         );

         e.addEventListener(
            'blur',
            mf.inputblur
         )

      });

   },

   inputFocus: ( e ) => {

      if( e.target == pf.inputForm[0] ) {
         pf.lblForm[0].style += `; ${focusStyle}`;
         pf.lineForm[0].style += `; ${lineFocus}`;
      } else {
         pf.lblForm[1].style += `; ${focusStyle}`;
         pf.lineForm[1].style += `; ${lineFocus}`;
      }

   },

   inputblur: ( e ) => {

      if( e.target == pf.inputForm[0] ) {

         if(pf.inputForm[0].value == ""){
            pf.lblForm[0].style += `; ${blurStyle}`;
            pf.lineForm[0].style += `; ${lineBlur}`;
         };

      } else {

         if(pf.inputForm[1].value == ""){
            pf.lblForm[1].style += `; ${blurStyle}`;
            pf.lineForm[1].style += `; ${lineBlur}`;
         };

      }

   }

};

mf.focus();