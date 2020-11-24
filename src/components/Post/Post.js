import React from 'react';
import './Post.css';
import Tags from '../Tags/Tags';
import { edit, hide, like, remove, show } from '../../store/actions';
import { useDispatch } from 'react-redux';

function Post({post}) {
	const {author} = post;
	const {photo} = post;
	const likeIcon = post.likedByMe ? "https://lms.openjs.io/liked.svg" : "https://lms.openjs.io/unliked.svg";

	const dispatch = useDispatch();

	const handleLike = () => dispatch(like(post.id));
	const handleRemove = () => dispatch(remove(post.id));
	const handleHide = () => dispatch(hide(post.id));
	const handleShow = () => dispatch(show(post.id));
	const handleEdit = () => dispatch(edit(post.id));
	
	if (post.hidden) {
		return (
			<article>
				<header>
					<img className="Post-avatar" src={author.avatar} width="50" height="50" alt={post.author.name} />
					<h5>{author.name}</h5>
					<button onClick={handleShow}>показать</button>
				</header>
			</article>
		);
	}
	return (
		<article>
			<header>
				<img className="Post-avatar" src={author.avatar} width="50" height="50" alt={post.author.name} />
				<h5>{author.name}</h5>
				<button onClick={handleRemove}>удалить</button>
				<button onClick={handleHide}>скрыть</button>
				<button onClick={handleEdit}>изменить</button>
				<div>{post.created}</div>
				{post.hit && <span>HIT</span>}
			</header>
			<div>
				<div className="Post-content">{post.content}</div>
				{photo && <img src={post.photo.url} alt={post.photo.alt} className="Post-photo" />}
			</div>
			<footer>
				<span className="Post-likes" onClick={handleLike}>
					<img src={likeIcon} width="20" height="20" alt="likes" />
					<span className="Post-likes-count">{post.likes}</span>
					{post.tags && <Tags tags={post.tags} />}
				</span>
			</footer>
		</article>
	);
}

export default Post;