import React from 'react';
import { connect, styled } from 'frontity';

const CaseStudies = ({ state, content, libraries }) => {
    const caseStudies = content.case_studies;

    return (
        <>
            <CaseStudiesWrapper>
                case studies
                {caseStudies && caseStudies.map((caseStudy, i) => {
                    const caseStudyType = caseStudy.post_type;
                    const caseStudyData = state.source[caseStudyType][caseStudy.ID];
                    const title = caseStudyData.title.rendered;
                    const featuredImage = state.source.attachment[caseStudyData.featured_media];
                    const featuredImageSource_url = featuredImage.source_url;
                    const client = caseStudyData.acf.client;
                    const link = libraries.source.normalize(caseStudyData.link);

                    return (
                        <CaseStudy key={i.toString()} className="square-element">
                            <CaseStudyBg className="case-study-bg" bg={featuredImageSource_url} />
                            <CaseStudyInner>
                                <div>
                                    <CaseStudyClient><b>{client}</b></CaseStudyClient>
                                </div>
                            </CaseStudyInner>
                        </CaseStudy>
                    );
                })}
            </CaseStudiesWrapper>
        </>
    );
};

export default connect(CaseStudies);

const CaseStudiesWrapper = styled.div`
    
`;

const CaseStudy = styled.div`
    
`;

const CaseStudyBg = styled.div`
    
`;

const CaseStudyInner = styled.div`
    
`;

const CaseStudyClient = styled.p`
    
`;

const CaseStudyTitle = styled.h4`
    
`;
