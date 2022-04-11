import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import AboutMe from './components/AboutMe';
import WebsiteLinks from './components/WebsiteLinks';

function App() {
  const codePenLink = 'https://codepen.io/declawedlyon'
  const linkedInLink = 'https://www.linkedin.com/in/declan-lyons-099052223/'
  const gitHubLink = 'https://github.com/declawedlyon'
  const codeCampLink = "https://www.freecodecamp.org/Declawed_Lyon"
  const codeCampCertificates = {
    responsiveWebDesign: 'https://freecodecamp.org/certification/Declawed_Lyon/responsive-web-design',
    
  }
  const resume = 'link to resume file in ?public? file.'
  const languagesList = ['JavaScript', 'HTML', 'CSS', 'SQL'] 
  // consider turning languagelist into languageobject with {tech: image} pairs
  const techList = ['React', 'Angular', 'MongoDB']

  
  
  return (
    <div className="App">
      <NavBar />
      <SideBar />

      <div id='content-container'>
        <br></br>
      {/* <Logo height={100} width={160}/> */}
      {/* <fieldset>
        <legend>Hello world</legend>
        <input type={'radio'} id={'test-1'} name={'test-buttons'} value={'button-1'}></input>
        <label for='test-1'>Test button 1</label>
        <input type={'radio'} id={'test-2'} name={'test-buttons'} value={'button-2'}></input>
        <label for='test-2'>Test button 2</label>
      </fieldset> */}


        <AboutMe languagesList={languagesList} techList={techList}/>

        <div id="experience-field">
          <div className='content-card'>
            {/* <div className='content-card-cover'>
                <h2>Experience (certifications?)</h2>
            </div> */}
            <h3>title</h3>
            <hr></hr>
          <p>Job experience and work experience. Describe working on a team in Lighthouse</p>
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris pharetra et ultrices. Pellentesque adipiscing commodo elit at. Sodales ut eu sem integer vitae justo eget. Ultrices dui sapien eget mi proin sed libero enim sed. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Ipsum dolor sit amet consectetur adipiscing. Bibendum ut tristique et egestas quis. Faucibus turpis in eu mi bibendum neque egestas. Leo vel orci porta non. Posuere sollicitudin aliquam ultrices sagittis orci. Gravida neque convallis a cras semper. Egestas dui id ornare arcu odio ut. Augue lacus viverra vitae congue eu. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Fermentum posuere urna nec tincidunt praesent semper feugiat.

Sit amet facilisis magna etiam tempor. Vulputate enim nulla aliquet porttitor lacus. Diam sit amet nisl suscipit. Imperdiet nulla malesuada pellentesque elit eget. At in tellus integer feugiat. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Proin fermentum leo vel orci porta. Integer quis auctor elit sed. Porttitor eget dolor morbi non arcu risus quis. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Cursus turpis massa tincidunt dui ut. Pharetra magna ac placerat vestibulum lectus. Orci ac auctor augue mauris augue neque gravida in.

Gravida in fermentum et sollicitudin ac. Laoreet id donec ultrices tincidunt arcu non. In ante metus dictum at tempor commodo ullamcorper a. Natoque penatibus et magnis dis parturient montes nascetur. Nulla aliquet enim tortor at auctor urna. Amet mauris commodo quis imperdiet massa. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Odio ut enim blandit volutpat maecenas. Donec ac odio tempor orci dapibus ultrices. Molestie at elementum eu facilisis sed odio. Tincidunt tortor aliquam nulla facilisi. Libero enim sed faucibus turpis in eu mi. Eu consequat ac felis donec. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna.

Vel pharetra vel turpis nunc. Egestas sed tempus urna et. Nec ultrices dui sapien eget. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Amet dictum sit amet justo donec enim diam. Eu augue ut lectus arcu bibendum at varius vel. Semper viverra nam libero justo laoreet sit amet cursus. Imperdiet proin fermentum leo vel orci porta non. Quisque egestas diam in arcu cursus euismod quis viverra. Mollis nunc sed id semper risus. Amet dictum sit amet justo donec enim diam vulputate ut. Convallis a cras semper auctor neque vitae tempus quam.

Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Tempor orci dapibus ultrices in iaculis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Elit eget gravida cum sociis. Sed tempus urna et pharetra pharetra. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Nisl purus in mollis nunc sed id semper risus. Volutpat commodo sed egestas egestas fringilla. Sed arcu non odio euismod lacinia at. Elementum eu facilisis sed odio morbi quis. Faucibus vitae aliquet nec ullamcorper sit amet. Volutpat consequat mauris nunc congue nisi vitae suscipit. Elit pellentesque habitant morbi tristique. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Quis risus sed vulputate odio ut. Orci nulla pellentesque dignissim enim sit amet. At augue eget arcu dictum.

Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Egestas fringilla phasellus faucibus scelerisque. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Viverra adipiscing at in tellus integer feugiat scelerisque. Eget duis at tellus at urna condimentum mattis pellentesque. Integer malesuada nunc vel risus. Eget velit aliquet sagittis id. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan.

Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Id neque aliquam vestibulum morbi blandit cursus risus at. Nisl tincidunt eget nullam non. In fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat lacus laoreet non curabitur gravida arcu ac. Ut diam quam nulla porttitor massa. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Integer enim neque volutpat ac tincidunt vitae semper quis. Urna cursus eget nunc scelerisque viverra mauris. Duis at tellus at urna condimentum mattis pellentesque. Mauris in aliquam sem fringilla ut morbi tincidunt. Lectus proin nibh nisl condimentum id. Vel eros donec ac odio tempor orci dapibus. Sit amet nisl purus in mollis nunc sed id. Risus in hendrerit gravida rutrum. Consequat ac felis donec et. Euismod in pellentesque massa placerat duis ultricies.

Commodo quis imperdiet massa tincidunt nunc pulvinar. Amet mattis vulputate enim nulla aliquet. Pharetra magna ac placerat vestibulum. Nam at lectus urna duis. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Faucibus scelerisque eleifend donec pretium. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Morbi blandit cursus risus at ultrices mi tempus. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Urna duis convallis convallis tellus id interdum velit laoreet. Ipsum faucibus vitae aliquet nec ullamcorper. Enim facilisis gravida neque convallis. Id donec ultrices tincidunt arcu.

Viverra orci sagittis eu volutpat odio facilisis. Mattis molestie a iaculis at erat pellentesque. Pellentesque id nibh tortor id aliquet lectus proin nibh. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. At tellus at urna condimentum mattis pellentesque id nibh. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Pellentesque pulvinar pellentesque habitant morbi tristique. Pretium quam vulputate dignissim suspendisse in est ante. Fermentum iaculis eu non diam. Massa massa ultricies mi quis hendrerit dolor magna eget. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Amet venenatis urna cursus eget nunc. Odio ut sem nulla pharetra diam. Semper viverra nam libero justo laoreet sit amet. Aliquam faucibus purus in massa tempor nec. Leo vel fringilla est ullamcorper. Ut etiam sit amet nisl purus. Tortor vitae purus faucibus ornare suspendisse sed. Ullamcorper eget nulla facilisi etiam dignissim.

Hac habitasse platea dictumst quisque sagittis. Sit amet justo donec enim diam. Interdum varius sit amet mattis. Enim eu turpis egestas pretium aenean. At lectus urna duis convallis convallis. Mi bibendum neque egestas congue quisque. Porta lorem mollis aliquam ut porttitor leo a. Mauris pharetra et ultrices neque. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Quam nulla porttitor massa id neque. Id interdum velit laoreet id donec ultrices tincidunt. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Fermentum dui faucibus in ornare quam viverra. Neque vitae tempus quam pellentesque nec nam aliquam. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Aliquet eget sit amet tellus cras. Erat velit scelerisque in dictum non consectetur a.

Tristique senectus et netus et malesuada fames ac. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Elementum facilisis leo vel fringilla est ullamcorper eget. Tortor id aliquet lectus proin. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Egestas tellus rutrum tellus pellentesque. Tellus elementum sagittis vitae et leo duis. Sit amet cursus sit amet dictum sit amet justo donec. Parturient montes nascetur ridiculus mus. Mi eget mauris pharetra et ultrices neque. Quisque egestas diam in arcu cursus. Sed blandit libero volutpat sed cras ornare. Augue eget arcu dictum varius duis at consectetur. Egestas integer eget aliquet nibh praesent tristique magna sit amet.

Turpis tincidunt id aliquet risus feugiat in. Sit amet facilisis magna etiam. Pellentesque elit eget gravida cum sociis natoque. Ullamcorper morbi tincidunt ornare massa. Purus semper eget duis at. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Gravida in fermentum et sollicitudin ac. Libero nunc consequat interdum varius. Vitae ultricies leo integer malesuada nunc vel risus commodo. Auctor elit sed vulputate mi. Lorem ipsum dolor sit amet. Pellentesque massa placerat duis ultricies. Dignissim cras tincidunt lobortis feugiat vivamus at. Id diam vel quam elementum pulvinar etiam non quam lacus. Risus in hendrerit gravida rutrum quisque non tellus orci.

Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Feugiat in fermentum posuere urna. Adipiscing diam donec adipiscing tristique risus nec. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Laoreet sit amet cursus sit amet dictum sit. Non tellus orci ac auctor augue. A diam maecenas sed enim ut sem viverra. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Sodales ut eu sem integer vitae justo eget. Velit scelerisque in dictum non consectetur a erat nam. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit.

Ante metus dictum at tempor commodo ullamcorper a lacus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Imperdiet sed euismod nisi porta lorem mollis aliquam. Duis tristique sollicitudin nibh sit. Id semper risus in hendrerit gravida rutrum quisque non. Nunc sed blandit libero volutpat sed. Nunc sed blandit libero volutpat sed cras. Condimentum id venenatis a condimentum vitae sapien. Non arcu risus quis varius quam quisque. Viverra aliquet eget sit amet. Arcu vitae elementum curabitur vitae nunc sed. Tortor dignissim convallis aenean et. Nec dui nunc mattis enim. Nullam ac tortor vitae purus faucibus. Aliquam etiam erat velit scelerisque in. Gravida quis blandit turpis cursus in hac habitasse platea. Scelerisque fermentum dui faucibus in.

Sem integer vitae justo eget. Sem et tortor consequat id. Aliquet nibh praesent tristique magna sit amet purus. Vitae sapien pellentesque habitant morbi tristique. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Volutpat est velit egestas dui id ornare. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Tellus rutrum tellus pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis. Nisi lacus sed viverra tellus in hac habitasse platea.

Non pulvinar neque laoreet suspendisse interdum. Eros donec ac odio tempor orci. Convallis aenean et tortor at risus. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Arcu cursus vitae congue mauris. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Quam pellentesque nec nam aliquam sem et tortor. Purus ut faucibus pulvinar elementum integer. Maecenas ultricies mi eget mauris pharetra. Eros donec ac odio tempor orci. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Vel elit scelerisque mauris pellentesque. Vivamus at augue eget arcu dictum varius duis at consectetur. Nulla pharetra diam sit amet nisl. Tellus integer feugiat scelerisque varius morbi. Vulputate eu scelerisque felis imperdiet.

Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Nibh nisl condimentum id venenatis a. Nunc vel risus commodo viverra maecenas accumsan. Sed blandit libero volutpat sed cras ornare. Nullam vehicula ipsum a arcu cursus. Et leo duis ut diam. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Facilisis sed odio morbi quis. Eros donec ac odio tempor orci. Ut aliquam purus sit amet luctus venenatis lectus. Tristique risus nec feugiat in fermentum posuere urna nec. Magnis dis parturient montes nascetur ridiculus mus mauris. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. At urna condimentum mattis pellentesque id nibh tortor id aliquet.

In nibh mauris cursus mattis molestie a. Massa enim nec dui nunc mattis enim ut. Tellus id interdum velit laoreet id donec. Elit eget gravida cum sociis natoque penatibus et. Gravida quis blandit turpis cursus in hac. In pellentesque massa placerat duis. Volutpat est velit egestas dui id. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Ipsum dolor sit amet consectetur. Facilisi morbi tempus iaculis urna id volutpat lacus. Velit dignissim sodales ut eu sem integer. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Duis at tellus at urna condimentum mattis pellentesque. Diam sit amet nisl suscipit adipiscing. Non blandit massa enim nec. Malesuada fames ac turpis egestas integer eget aliquet.

Et tortor consequat id porta nibh venenatis cras sed. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Enim neque volutpat ac tincidunt vitae semper quis lectus. Velit sed ullamcorper morbi tincidunt ornare massa. Tortor consequat id porta nibh. Quam pellentesque nec nam aliquam sem. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Tortor dignissim convallis aenean et tortor at risus. Venenatis cras sed felis eget. Leo duis ut diam quam nulla porttitor. Tristique risus nec feugiat in fermentum.

Amet cursus sit amet dictum sit amet justo donec enim. Quis viverra nibh cras pulvinar mattis nunc sed blandit. Sit amet nulla facilisi morbi tempus iaculis urna id. Commodo viverra maecenas accumsan lacus vel. Purus sit amet volutpat consequat mauris nunc congue nisi. Euismod lacinia at quis risus sed vulputate odio ut enim. Turpis massa tincidunt dui ut ornare lectus sit amet est. Volutpat blandit aliquam etiam erat velit scelerisque in. Quam adipiscing vitae proin sagittis nisl rhoncus. Suscipit adipiscing bibendum est ultricies integer quis. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Donec pretium vulputate sapien nec. Aenean et tortor at risus viverra adipiscing at. Urna porttitor rhoncus dolor purus non enim praesent. Tempor orci dapibus ultrices in iaculis. Nunc sed blandit libero volutpat. Ac feugiat sed lectus vestibulum mattis. Massa eget egestas purus viverra accumsan in nisl nisi.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div id='project-field'>
          <div className='content-card'>
            {/* <div className='content-card-cover'>
                <h2>Projects</h2>
            </div> */}
            <h3>title</h3>
            <hr></hr>
          link to projects. Include: Bridge. Tweeter(?). (want to build app for Elevation. link to that(?))
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href='#'>Bridge</a>
          </div>
        </div>

        <div id='contact-me-field'>
          <div className='content-card'>
            {/* <div className='content-card-cover'>
                <h2>Contact</h2>
            </div> */}
            <h3>title</h3>
            <hr></hr>
            Quick link to automate emailing me.
            contact and phone information.
            Location / working hours / contact hours.
            <br></br>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          {/* <a href='#'>Link to my current resume</a> */}
        </div>
      </div>

      <WebsiteLinks 
        codePenLink={codePenLink}
        linkedInLink={linkedInLink}
        gitHubLink={gitHubLink} 
        codeCampLink={codeCampLink} 
        resume={resume}
      />
      
    </div>
  );
}

export default App;
