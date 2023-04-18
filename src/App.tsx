import ClickTest from "./pages/ClickTest";
import FileDrop from "./pages/FileDrop";
import ForwardRefTest from "./pages/ForwardRefTest";
import InputFocusTest from "./pages/InputFocusTest";
import InputValueTest from "./pages/InputValueTest";
import ValidateableInput from "./pages/ValidateableInputTest";




function App() {
  return (
    <main>
      <ValidateableInput />
      <ForwardRefTest />
      <InputValueTest />
      <InputFocusTest />
      <FileDrop />
      <ClickTest />
    </main>
  );
}

export default App;
