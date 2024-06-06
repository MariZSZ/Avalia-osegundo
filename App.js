
import { StyleSheet,View, Button} from 'react-native';
import Title from './SRC/Components/Title';
import Mariana from './SRC/Components/Mariana/mariana';
import Marjory from './SRC/Components/Marjory/marjory';
import Nataly from './SRC/Components/Nataly/nataly';
import Otavio from './SRC/Components/Otavio/otavio';
import Rhuan from './SRC/Components/Rhuan/rhuan';



export default function App() {
  return (
    <View style={styles.container}>

<Title/>
<Mariana/>
<Marjory/>
<Nataly/>
<Otavio/>
<Rhuan/>


      <Button
      title={"Enviar"}
/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f60069',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
