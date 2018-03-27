import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import profilePhoto from '../img/me.jpg'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="container">
        <div className="columns">
          <div>
            <figure className="image" id="profile">
              <img src={profilePhoto} alt="Aaron Colby Williams" />
            </figure>
          </div>
          <div>
          <section className="hero">
            <div className="hero-body">
              
                <h1 className="title">
                  Aaron Colby Williams
                </h1>
                <p>I'm a reporter who specializes in graphics and data visualization for <a href="https://www.washingtonpost.com/people/aaron-williams/">The Washington Post</a>. Before joining The Post, I covered housing, campaign finance, police and local politics for the San Francisco Chronicle and the Center for Investigative Reporting.</p>

                <div className="social">
                  <a href="https://twitter.com/aboutaaron" title="Twitter">
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                  </a>
                  <a href="https://github.com/aboutaaron" title="Github">
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/aboutaaron" title="LinkedIn">
                    <span className="icon">
                      <i className="fab fa-linkedin"></i>
                    </span>
                  </a>
                </div>
            </div>
          </section>
          </div>
          
            
            {/* {posts
              .filter(post => post.node.frontmatter.templateKey === 'blog-post')
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))} */}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
