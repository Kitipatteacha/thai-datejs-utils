# thai-datejs-utils

## Example use with Material-UI

```tsx
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import thaiDayjsUtils from './helper/thaiDayjsUtils';
import 'dayjs/locale/th';

function App() {
    return (
        <MuiPickersUtilsProvider utils={thaiDayjsUtils} locale={'th'}>
            <Root />
        </MuiPickersUtilsProvider>
    );
}
```
