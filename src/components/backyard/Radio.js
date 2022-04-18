

export default function RadioButtons(props) {

  return (
    <fieldset>
      <legend>Hello world</legend>
      <input type={'radio'} id={'test-1'} name={'test-buttons'} value={'button-1'}></input>
      <label for='test-1'>Test button 1</label>
      <input type={'radio'} id={'test-2'} name={'test-buttons'} value={'button-2'}></input>
      <label for='test-2'>Test button 2</label>
    </fieldset>
  )
}