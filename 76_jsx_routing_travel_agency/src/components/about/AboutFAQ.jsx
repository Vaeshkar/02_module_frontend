const AboutFAQ = () => {
    return (
        <>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                What makes us different?
            </div>
            <div className="collapse-content">
                <p>We work with local guides, focus on sustainability, and offer curated experiences—not just package deals.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                How do we choose destinations?
        </div>
        <div className="collapse-content">
                <p>Each destination is hand-picked based on cultural richness, safety, and uniqueness.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                Are trips family-friendly?
            </div>
            <div className="collapse-content">
                <p>Yes, we offer tailored packages suitable for families with kids of all ages.</p>
            </div>
        </div>
        </>
    );
};

export default AboutFAQ;