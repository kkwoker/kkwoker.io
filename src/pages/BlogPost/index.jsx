import React from 'react';
import { BodyContentStyle } from './Styles';

class BlogPost extends React.Component {
  render() {
    return (
      <div>
        <h1>Lorem ipsum</h1>
        <h2>dolor sit amet</h2>
        <BodyContentStyle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex nunc, iaculis sed dignissim eu, volutpat non leo. Etiam interdum eu libero nec vehicula. Donec venenatis condimentum augue. Nunc sollicitudin rutrum lectus. Maecenas fermentum sodales ante id placerat. Morbi vestibulum iaculis mauris, mollis volutpat tellus porta quis. Fusce facilisis semper molestie. Suspendisse non quam lorem.
          </p>
          <p>
            Proin dapibus felis ac volutpat pretium. Nulla facilisi. Duis cursus sagittis diam blandit convallis. Mauris fermentum posuere nunc, in dignissim magna lacinia id. Sed tellus mauris, ultricies non vehicula a, efficitur in arcu. Duis tempor hendrerit purus vel imperdiet. Aliquam erat volutpat. Quisque sit amet sapien tempor, porttitor urna id, congue orci. Proin fermentum consectetur luctus. Praesent diam nulla, sodales id magna nec, dictum blandit massa. Aliquam suscipit nisi eget ante venenatis maximus. Vestibulum ultrices ultricies velit.
          </p>
          <p>
            Maecenas mi quam, sollicitudin et molestie eget, vulputate vel eros. Vivamus est sem, congue id efficitur in, pulvinar eu velit. Morbi ac rutrum est. In auctor viverra elit a pharetra. Sed rutrum euismod est a pellentesque. In ac commodo libero, a sollicitudin turpis. Cras rutrum mi non dapibus pellentesque. Nunc cursus turpis lectus, vitae dapibus lectus malesuada eget. Phasellus suscipit auctor lacinia. Nunc scelerisque erat ac dui consectetur ullamcorper. Duis lectus ante, efficitur sed ultricies ac, varius in felis. Integer in lacinia tortor. Curabitur iaculis neque massa, quis bibendum purus consectetur at. Sed eget lectus in ligula rutrum finibus in nec magna. Integer congue in dolor eu placerat. Integer at sem eu tellus facilisis venenatis sit amet at dui.
          </p>
          <p>
            Pellentesque mollis hendrerit imperdiet. Vestibulum mollis justo ut nisl faucibus, ac condimentum quam hendrerit. Etiam placerat, libero eu vehicula semper, odio ipsum bibendum libero, quis gravida felis sapien vel turpis. Curabitur eget quam vel arcu vehicula aliquet. Nulla volutpat efficitur elit ac vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla rutrum, tellus eu luctus semper, neque ex gravida justo, ut rhoncus nunc mi ac sapien. Curabitur dui diam, mattis ac libero sed, tristique efficitur velit.
          </p>
          <p>
            Curabitur ut est non tellus faucibus porta. Nullam a ultrices purus. Vestibulum eget nisl sapien. Proin id tempus turpis. Aenean sapien nulla, tristique sed nulla quis, consequat volutpat felis. Mauris rhoncus diam et tincidunt ullamcorper. Nunc ac elit risus. Mauris ultrices malesuada dolor, ut aliquam massa porta at. Cras dapibus pellentesque rutrum. Proin dui quam, accumsan eu ex vitae, congue blandit est. Cras vitae arcu elementum, mollis mi nec, imperdiet lectus. In porttitor nisi quis libero posuere venenatis. Curabitur lacinia varius sagittis.
          </p>
        </BodyContentStyle>
        <div>
          <a href='/blog'>Back to blog list</a>
        </div>
      </div>
    )
  }
}

export default BlogPost;
