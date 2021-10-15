
        /**
         * Test si une chaine de caractère ressemble à une adresse email
         * @author Seb Maloron
         * @param {string} email 
         * @returns boolean
         */
        /////////////////////////////////////////////////////////////////////////
        function testEmail(email) {
            var hasDot = false;
            var hasArobase = false;
            var isValidEmail = true;

            // for(var index = 0; index < email.length; index ++)
            for (var index in email) {
                // Récupère le caractère dont la position est index
                char = email.charAt(index);

                // Si on trouve un espace l'email ne peut être valide
                // de même que s'il y a plus d'une arobase
                // on arrête donc la boucle
                if (char == " " || ("@" == char && hasArobase)) {
                    isValidEmail = false;
                    break;
                }

                // test de l'existence d'un point
                if (char == "." && index > 0 && index < email.length - 1) {
                    hasDot = true;
                }
                // test de l'existence d'une arobase
                if (char == "@" && index > 0 && index < email.length - 1) {
                    hasArobase = true;
                }
            }

            return isValidEmail && hasArobase && hasDot;
        }
        /////////////////////////////////////////////////////////////////////
        /**
         * Convert Celsius to Fahrenheit
         * @param {int} celsius
         * @returns int 
         */
        function celsToFah(celsius){
            
            return celsiusToFahrenheit=(celsius * 1.8) + 32;

            
        }
        ///////////////////////////////////////////////////////////
        /*
         * DUMB SHIT
         * 
         
        function yearOption(yearPlus){
             {
            
                "<option>" + (yearPlus) + "</option>"
  
          }
        }


        function yearList(yearInput, yearMax){

            var html = "<select>";
            for (var yearPlus = yearInput; yearPlus <= yearMax; yearPlus++){
            html += yearOption(yearPlus);
            }
    
            html += "</select>";
            return html;



        }*/
        ///////////////////////////////
        function getOption(year){
            return "<option>" + year + "</option>";
        }

        function getYearComboBox(startYear, numberOfYears){
            html = "<select>";
                for(let i = 0; i < numberOfYears; i++){
                    html += getOption(startYear + i);
                }

            html += "</select>";

            return html;
        }


       
     
