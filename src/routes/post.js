import { h, Component } from "preact";
import snarkdown from "snarkdown";
export default class Post extends Component {
  state = {};

  componentWillMount() {
    let url = `https://post-server.now.sh/posts/${this.props.id}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          post: data
        });
      })
      .catch(err => console.log(err.message));
  }

  render({ id }, { post }) {
    if (!post) {
      return <h1>loading</h1>;
    } else {
      return (
        <div>
          <h1>
            {post.title}
          </h1>
          <div
            class="lh-copy"
            dangerouslySetInnerHTML={{ __html: snarkdown(post.content) }}
          />
        </div>
      );
    }
  }
}
