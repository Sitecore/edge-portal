import Link from 'next/link';
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Article } from 'interfaces/articles';

export function DisplayArticle({ article }: { article: Article }) {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				{article.Title}
			</Typography>
			<Typography variant="body1" gutterBottom>
				{article.Abstract}
			</Typography>
			<Typography variant="body2" gutterBottom>
				<Box dangerouslySetInnerHTML={{ __html: article.Body }} />
			</Typography>
		</>
	);
}
