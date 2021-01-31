import React, { Component } from 'react';
import { DiscussionEmbed } from 'disqus-react';
import './comment.css';

class Comment extends Component {
    render() {
        return (
            <div className="projectComment_main">
                <h2>Review</h2>
                <div className="project_comment">
                    <DiscussionEmbed
                        shortname='vaishnavanResume'
                        config={
                            {
                                url: "https://vaishnavanmresume.web.app/",
                                identifier: 0,
                                title: "project comments",
                                language: 'en_MX' //e.g. for Traditional Chinese (Taiwan)
                            }
                        }

                    />
                </div>
            </div>
        )
    }
}

export default Comment;
