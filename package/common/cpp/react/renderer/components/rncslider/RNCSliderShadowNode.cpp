#include "RNCSliderShadowNode.h"

namespace facebook::react
{

    extern const char RNCSliderComponentName[] = "RNCSlider";

    void RNCSliderShadowNode::setRNCSliderMeasurementsManager(
        const std::shared_ptr<RNCSliderMeasurementsManager> &
            measurementsManager)
    {
        ensureUnsealed();
        measurementsManager_ = measurementsManager;
    }

#pragma mark - LayoutableShadowNode

    Size RNCSliderShadowNode::measureContent(
        const LayoutContext & /*layoutContext*/,
        const LayoutConstraints &layoutConstraints) const
    {
        return measurementsManager_->measure(getSurfaceId(), layoutConstraints);
    }

} // namespace facebook::react