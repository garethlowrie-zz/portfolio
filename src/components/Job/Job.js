import React from 'react';
import Tags from 'components/Tags/Tags'
import styles from './Job.module.less';

const Job = ({
    company,
    role,
    startDate,
    endDate,
    children,
    tags
}) => {
    return (
        <div className={styles.job}>
            <div className={styles.jobCompany}>{role} | {company}</div>
            <div className={styles.jobDates}>{startDate}  -  {endDate}</div>
            <div className={styles.jobBody}>{children}</div>
            {tags && <Tags items={tags} />}
        </div>
    )
}

export default Job;