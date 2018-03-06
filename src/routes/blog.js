import { h, Component } from "preact";
import { Link } from "preact-router/match";
import snarkdown from "snarkdown";

const PostContainer = props =>
  <div>
    <Link href={`/post/${props.id}`}>
      <h1>
        {props.title}
      </h1>
    </Link>
    <div dangerouslySetInnerHTML={{ __html: snarkdown(props.snippet) }} />
  </div>;

export default class Blog extends Component {
  state = {};

  componentWillMount() {
    fetch("https://post-server.now.sh/posts")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          posts: data
        });
      })
      .catch(err => console.log(err.message));
  }

  render({}, { posts }) {
    if (!posts) {
      return <h1>loading</h1>;
    } else {
      let content = posts.map(x =>
        <PostContainer
          key={x.id}
          id={x.id}
          title={x.title}
          snippet={x.content}
        />
      );

      return (
        <div>
          {content}
        </div>
      );
    }
  }
}
