function check_Palindrome(str_entry){
    
       var char = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    
        if(char==="") {
            document.write("Nothing found!");
            return false;
        }
     
        if ((char.length) % 2 === 0) {
            ccount = (char.length) / 2;
        } else {
    
            if (char.length === 1) {
                document.write("Entry is a <b>Palindrome</b>.");
                return true;
            } else {
    
                ccount = (char.length - 1) / 2;
            }
        }
    
        for (var x = 0; x < ccount; x++) {
     
            if (char[x] != char.slice(-1-x)[0]) {
                document.write("Entry is not a <b>Palindrome</b>.");
                return false;
            }
        }
        document.write("The entry is a <b>Palindrome</b>.");
        return true;
    }
    check_Palindrome(prompt("Enter a name"));
    