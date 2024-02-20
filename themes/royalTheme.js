
import { createTheme } from '@rneui/themed'; 

// palette is kept as a separate variable to make it easy to change colours
const themePallete = {
    primary: '#3498db',
    primaryDarker: '#080808',
    primaryLighter: '#217F91',
    alternate: '#fff',
    grey: '#aaaaaa',
    greyDarker: '#43484d',
    greyLighter: '#217F91'
  };

//   a theme follows the pattern: components > [ComponentType] > [ComponentStyle]
export const royalTheme = createTheme({
    components: {
        Button: (buttonProps) =>({
            buttonStyle: {
                marginTop: 15, 
                raised: true, 
                borderRadius: 15, 
                backgroundColor: themePallete.primary, 
            }, 
            titleStyle: {
                color: themePallete.alternate, 
                textTransform: 'uppercase', 
            }, 
            disabledStyle: {
                backgroundColor: themePallete.greyDarker, 
            }, 
            icon: {
                color: buttonProps.disabled ? themePallete.greyLighter : themePallete.alternate, 
            }, 
            type: 'clear'
        }), 
        Text:{ 
            h1Style: {
                color:themePallete. primaryDarker, 
                fontWeight: 'bold', 
            }, 
            h2Style: {
                color: themePallete.primaryLighter, 
                fontSize: 20, 
                margin: 10, 
            }, 
            h3Style: {
                color: themePallete.primaryLighter, 
                fontSize: 20, 
                margin: 5, 
            }, 
            style: {
                margin: 5 
            }
        }, 
        Divider: {
            color: themePallete.primaryLighter, 
            width: 2
        }, 
      
    }, 

})
  
