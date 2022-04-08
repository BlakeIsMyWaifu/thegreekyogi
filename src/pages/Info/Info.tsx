import Page from 'components/Page'
import React from 'react'
import { InfoData } from 'sectionData/sectionData'

import { Container, SectionDescription, SectionTitle, SectionWrapper, Title } from './InfoElements'

interface InfoPageComponent {
	data: InfoData;
}

const InfoPage: React.FC<InfoPageComponent> = ({ data }) => {

	return (
		<Page>
			<Container id={data.id}>
				<Title>{data.text.title}</Title>
				{
					data.more.map(({ title, description }, i) => {
						return <SectionWrapper key={`title-${i}`}>
							<SectionTitle>{title}</SectionTitle>
							<SectionDescription>{description}</SectionDescription>
						</SectionWrapper>
					})
				}
			</Container>
		</Page>
	)
}

export default InfoPage