import ArrayState from "./pages/ArrayState";
import BasicForm from "./pages/BasicForm";
import HigherOrderRadioInputTest from "./pages/HigherOrderRadioInputTest";
import NumberState from "./pages/NumberState";
import ObjectState from "./pages/ObjectState";
import RadioInputTest from "./pages/RadioInputTest";
import RadioInputTest2 from "./pages/RadioInputTest2";
import ShowHideModal from "./pages/ShowHideModal";


function App() {
  return (
    <main>
      <ArrayState />
      <ObjectState />
      <BasicForm />
      <HigherOrderRadioInputTest />
      <RadioInputTest />
      <RadioInputTest2 />
      <ShowHideModal />
      {/* <InputTest /> */}
      <NumberState />
    </main>
  );
}

export default App;
