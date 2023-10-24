
#pragma once

#include "RNCSliderMeasurementsManager.h"
#include "RNCSliderShadowNode.h"

#include <react/renderer/core/ConcreteComponentDescriptor.h>

namespace facebook::react
{

    /*
     * Descriptor for <RNCSlider> component.
     */
    class RNCSliderComponentDescriptor final
        : public ConcreteComponentDescriptor<RNCSliderShadowNode>
    {
    public:
        RNCSliderComponentDescriptor(
            const ComponentDescriptorParameters &parameters)
            : ConcreteComponentDescriptor(parameters),
              measurementsManager_(std::make_shared<RNCSliderMeasurementsManager>(
                  contextContainer_)) {}

        void adopt(ShadowNode::Unshared const &shadowNode) const override
        {
            ConcreteComponentDescriptor::adopt(shadowNode);

            auto sliderShadowNode =
                std::static_pointer_cast<RNCSliderShadowNode>(shadowNode);

            // `RNCSliderShadowNode` uses `RNCSliderMeasurementsManager` to
            // provide measurements to Yoga.
            sliderShadowNode->setRNCSliderMeasurementsManager(
                measurementsManager_);

            // All `RNCSliderShadowNode`s must have leaf Yoga nodes with properly
            // setup measure function.
            sliderShadowNode->enableMeasurement();
        }

    private:
        const std::shared_ptr<RNCSliderMeasurementsManager> measurementsManager_;
    };

} // namespace facebook::react
