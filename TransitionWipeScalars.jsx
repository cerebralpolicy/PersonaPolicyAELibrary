{
    TransitionType() 
    {
        const throw_info_error = function(message) {
            throw new Error(message);
        };
        /**
         * Current time of the layer in seconds.
         * @type {number}
         */
        var t = thisLayer.time;
        const timing_info = {
            transition_duration: effect("TransitionDuration")("Slider"),
            frame_duration: thisComp.frameDuration,
            total_frames: Math.floor(effect("TransitionDuration")("Slider") / thisComp.frameDuration)
        };

        const frame_to_sec = function(frames){
            return frames * timing_info.frame_duration;
        };
        const sec_to_frame = function(seconds){
            return seconds / timing_info.frame_duration;
        };
        /**
         * Dictionary of easing functions for the "In" slope of a transition.
         * Each function takes a start frame and duration in frames and returns a normalized time value between 0 and 1.
         * The returned value represents the progress of the transition, where 0 is the start and 1 is the end.
         * This dictionary can be extended with additional easing functions as needed.
         * @class <Dictionary of easing functions for the "In" slope of a transition.>
         */
        const InSlopeDictionary = {
            /**
             * Sine easing function for the "In" slope of a transition.
             * @param {number} start start frame of the transition
             * @param {number} duration duration of the transition in frames
             * @returns {number} normalized time value between 0 and 1
             */
            EaseSine: function(start, duration) {
                var start_sec = frame_to_sec(start);
                var duration_sec = frame_to_sec(duration);
                if (t < start_sec) return 0;
                if (t > start_sec + duration_sec) return 1;
                var progress = (t - start_sec) / duration_sec;
                return 1 - Math.cos(progress * Math.PI / 2);
            },
            /**
             * Linear easing function for the "In" slope of a transition.
             * @param {number} start start frame of the transition
             * @param {number} duration duration of the transition in frames
             * @returns {number} normalized time value between 0 and 1
             */
            Linear: function(start, duration) {
                var start_sec = frame_to_sec(start);
                var duration_sec = frame_to_sec(duration);
                if (t < start_sec) return 0;
                if (t > start_sec + duration_sec) return 1;
                return (t - start_sec) / duration_sec;
            }
        };
        const OutSlopeDictionary = {
            /**
             * Sine easing function for the "Out" slope of a transition.
             * @param {number} start start frame of the transition
             * @param {number} duration duration of the transition in frames
             * @returns {number} normalized time value between 0 and 1
             */
            EaseSine: function(start, duration) {
                var start_sec = frame_to_sec(start);
                var duration_sec = frame_to_sec(duration);
                if (t < start_sec) return 0;
                if (t > start_sec + duration_sec) return 1;
                var progress = (t - start_sec) / duration_sec;
                return Math.sin(progress * Math.PI / 2);
            },
            /**
             * Linear easing function for the "Out" slope of a transition.
             * @param {number} start start frame of the transition
             * @param {number} duration duration of the transition in frames
             * @returns {number} normalized time value between 0 and 1
             */
            Linear: function(start, duration) {
                var start_sec = frame_to_sec(start);
                var duration_sec = frame_to_sec(duration);
                if (t < start_sec) return 0;
                if (t > start_sec + duration_sec) return 1;
                return (t - start_sec) / duration_sec;
            }
        }
        const TransitionType = class {
            /**
             * Transition function for the "In" animation.
             * @type {function(number, number, number|Array<number>, number|Array<number>): number|Array<number>} transition function for the "In" animation
             */
            In;
            /**
             * Transition function for the "Out" animation.
             * @type {function(number, number, number|Array<number>, number|Array<number>): number|Array<number>} transition function for the "Out" animation
             */
            Out;
            /**
             * Transition function for the "InOut" animation.
             * @type {function(number, number, number, number, number|Array<number>, number|Array<number>): number|Array<number>} transition function for the "InOut" animation
             */
            InOut;
            /**
             * Calculates the difference between the start and end values.
             * @param {number|Array<number>} start_value the starting value(s)
             * @param {number|Array<number>} end_value the ending value(s)
             * @returns {number|Array<number>} the difference between the start and end values
             */
            static #PerformTransition(startValue, endValue, progress) {
                if (startValue instanceof Array) {
                    var delta = endValue.map((val, index) => val - startValue[index]);
                    return startValue.map((val, index) => val + delta[index] * progress);
                } else {
                    var delta = endValue - startValue;
                    return startValue + delta * progress;
                }
            }
            /**
             * Factory method to create transition functions based on a given slope.
             * @param {function(number, number): number} slope easing function for the transition
             * @returns {function(number, number, number|Array<number>, number|Array<number>, number|Array<number>): number|Array<number>} transition function
             */
            static #functionFactory(slope) {
                return function(start, duration, start_value, end_value) {
                    if (start_value === undefined || end_value === undefined) throw_info_error("Start and end values must be defined. Current values: start_value=" + start_value + ", end_value=" + end_value);
                    if (slope === undefined) throw_info_error("Slope function must be defined.");
                    var progress = slope(start, duration);
                    return TransitionType.#PerformTransition(start_value, end_value, progress);
                }
            }
            static #inOutSegment = {
                Queued: -1,
                In: 0,
                Hold: 1,
                Out: 2,
                Completed: 3
            }
            /**
             * Creates an in-out transition function using the provided in and out slope functions.
             * @param {function(number, number): number} inSlope - The slope function for the "in" segment.
             * @param {function(number, number): number} outSlope - The slope function for the "out" segment.
             * @returns {function(number, number, number, number, number|Array<number>, number|Array<number>): number|Array<number>} in-out transition function
             */
            static #inOutFunctionFactory(inSlope, outSlope) {
                const frame_to_sec = function(frames){
                    return frames * timing_info.frame_duration;
                };
                return function(in_start, in_duration, out_start, out_duration, start_value, end_value) {
                    var in_start_sec = frame_to_sec(in_start);
                    var in_duration_sec = frame_to_sec(in_duration);
                    var out_start_sec = frame_to_sec(out_start);
                    var out_duration_sec = frame_to_sec(out_duration);
                    if (start_value === undefined || end_value === undefined) throw_info_error("Start and end values must be defined. Current values: start_value=" + start_value + ", end_value=" + end_value);
                    if (inSlope === undefined || outSlope === undefined) throw_info_error("In and out slope functions must be defined.");
                    var segment = TransitionType.#inOutSegment;
                    if (t < in_start_sec) {
                        segment = TransitionType.#inOutSegment.Queued;
                    } else if (t < in_start_sec + in_duration_sec) {
                        segment = TransitionType.#inOutSegment.In;
                    } else if (t < out_start_sec) {
                        segment = TransitionType.#inOutSegment.Hold;
                    } else if (t < out_start_sec + out_duration_sec) {
                        segment = TransitionType.#inOutSegment.Out;
                    } else {
                        segment = TransitionType.#inOutSegment.Completed;
                    }
                    switch (segment) {
                        case TransitionType.#inOutSegment.Queued:
                            return start_value;
                        case TransitionType.#inOutSegment.In:
                            var progress = inSlope(in_start, in_duration);
                            return TransitionType.#PerformTransition(start_value, end_value, progress);
                        case TransitionType.#inOutSegment.Hold:
                            return end_value;
                        case TransitionType.#inOutSegment.Out:
                            var progress = outSlope(out_start, out_duration);
                            return TransitionType.#PerformTransition(end_value, start_value, progress);
                        case TransitionType.#inOutSegment.Completed:
                            return start_value;
                    }
                }
            }
            /**
             * Factory method to create transition functions based on a given slope.
             * @param {function(number, number): number} inSlope easing function for the transition
             * @param {function(number, number): number} outSlope easing function for the transition
             * @returns {TransitionType} instance of the TransitionType class containing the specified functions for the transition slopes
             */
            constructor(inSlope, outSlope) {
                this.In = TransitionType.#functionFactory(inSlope);
                this.Out = TransitionType.#functionFactory(outSlope);
                this.InOut = TransitionType.#inOutFunctionFactory(inSlope, outSlope);
            }
            static fromSlopes(inSlope, outSlope) {
                return new TransitionType(inSlope, outSlope);
            }
        }
        return {
            Linear: TransitionType.fromSlopes(InSlopeDictionary.Linear, OutSlopeDictionary.Linear),
            EaseSine: TransitionType.fromSlopes(InSlopeDictionary.EaseSine, OutSlopeDictionary.EaseSine)
        };
    },
    /**
     * Plays a transition wipe animation based on the specified animation type and timing information.
     * @param {function} animation_type the animation function to use for the wipe
     * @param {number} wipe1_start_frame_offset the start frame offset for the first wipe
     * @param {number} wipe1_duration the duration of the first wipe in frames
     * @param {number|null} wipe2_start_frame_offset the start frame offset for the second wipe (optional)
     * @param {number|null} wipe2_duration the duration of the second wipe in frames (optional)
     * @returns {number|Array<number>} the result of the animation function(s)
     */
    PlayWipe(animation_type, wipe1_start_frame_offset, wipe1_duration,wipe2_start_frame_offset = null, wipe2_duration = null)
    {
        const timing_info = {
            transition_duration: thisLayer.effect("TransitionDuration")("Slider"),
            frame_duration: thisComp.frameDuration,
            total_frames: Math.floor(thisLayer.effect("TransitionDuration")("Slider") / thisComp.frameDuration)
        };
        const mask_scale_def = function() {
            return {
                hidden: 100, // The shape subtracts all of the underlying content when fully scaled
                full: 0 // The shape reveals all of the underlying content when scaled to this size
            }
        };
        const frame_to_sec = function(frames){
            return frames * timing_info.frame_duration;
        };
        var only_wipe1 = wipe2_start_frame_offset === null || wipe2_duration === null;
        var wipe1_start_frame = wipe1_start_frame_offset; // No math required for the start frame
        if (only_wipe1){
            return animation_type.In(wipe1_start_frame, wipe1_duration, [100,100], [0,0]);
        }
        else {
            var wipe2_start_frame = timing_info.total_frames - wipe2_start_frame_offset;
            return animation_type.InOut(wipe1_start_frame, wipe1_duration, wipe2_start_frame, wipe2_duration, [100,100], [0,0]);
        }
    }
}