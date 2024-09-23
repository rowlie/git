import { getComponentBySectionType } from "@/components/"
import * as AnnotationsHelper from "@/lib/annotations";

import { type Section, PageCommonProps } from '@/components/common/types';

export type SectionsPageLayoutProps = PageCommonProps & {
    sections: Section[];
}

export default function SectionsPageLayout(props: SectionsPageLayoutProps) {
    const { sections, _id } = props;
    return (
        <div className="flex flex-col" {...AnnotationsHelper.setObjectId(_id)}>
            {sections.map((section, index) => {
                const SectionElement = getComponentBySectionType(section.type);

                if (!SectionElement) {
                    return null;
                }

                return (<SectionElement {...AnnotationsHelper.setFieldPath(`.sections.${index}`)} key={`${section.type}-${index}`} {...section} />);
            })}
        </div>
    );
}
