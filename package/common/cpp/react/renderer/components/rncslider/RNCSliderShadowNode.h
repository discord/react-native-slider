#pragma once

#include "RNCSliderMeasurementsManager.h"

#include <react/renderer/components/rncslider/EventEmitters.h>
#include <react/renderer/components/rncslider/Props.h>
#include <react/renderer/components/view/ConcreteViewShadowNode.h>
#include <jsi/jsi.h>

namespace facebook::react
{

    JSI_EXPORT extern const char RNCSliderComponentName[];

    /*
     * `ShadowNode` for <RNCSlider> component.
     */
    class JSI_EXPORT RNCSliderShadowNode final : public ConcreteViewShadowNode<
                                                     RNCSliderComponentName,
                                                     RNCSliderProps,
                                                     RNCSliderEventEmitter>
    {
    public:
        using ConcreteViewShadowNode::ConcreteViewShadowNode;

        // Associates a shared `RNCSliderMeasurementsManager` with the node.
        void setRNCSliderMeasurementsManager(
            const std::shared_ptr<RNCSliderMeasurementsManager> &
                measurementsManager);

#pragma mark - LayoutableShadowNode

        Size measureContent(
            const LayoutContext &layoutContext,
            const LayoutConstraints &layoutConstraints) const override;

    private:
        std::shared_ptr<RNCSliderMeasurementsManager> measurementsManager_;
    };

} // namespace facebook::react