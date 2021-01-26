const schema22 = {
    type: "object",
    properties: {
        name: { type: "string", minLength: 3, description: "Please enter your name" },
        vegetarian: { type: "boolean" },
        birthDate: { type: "string" },
        nationality: { type: "string", enum: ["DE", "IT", "JP", "US", "RU", "Other"] },
        personalData: {
            type: "object",
            properties: { age: { type: "integer", description: "Please enter your age." }, height: { type: "number" }, drivingSkill: { type: "number", maximum: 10, minimum: 1, default: 7 } },
            required: ["age", "height"],
        },
        occupation: { type: "string" },
        postalCode: { type: "string", maxLength: 5 },
    },
    required: ["occupation", "nationality"],
};

const func8 = require("../node_modules/ajv-latest/dist/compile/ucs2length").default;
const func0 = require("../node_modules/ajv-latest/dist/compile/equal");

export default function validate20(data, { dataPath = "", parentData, parentDataProperty, rootData = data } = {}) {
    let vErrors = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing0;
        if ((data.occupation === undefined && (missing0 = "occupation")) || (data.nationality === undefined && (missing0 = "nationality"))) {
            validate20.errors = [{ keyword: "required", dataPath, schemaPath: "#/required", params: { missingProperty: missing0 }, message: "should have required property '" + missing0 + "'" }];
            return false;
        } else {
            if (data.name !== undefined) {
                let data0 = data.name;
                const _errs0 = errors;
                if (typeof data0 === "string") {
                    if (func8(data0) < 3) {
                        validate20.errors = [{ keyword: "minLength", dataPath: dataPath + "/name", schemaPath: "#/properties/name/minLength", params: { limit: 3 }, message: "should NOT have fewer than 3 characters" }];
                        return false;
                    }
                } else {
                    validate20.errors = [{ keyword: "type", dataPath: dataPath + "/name", schemaPath: "#/properties/name/type", params: { type: "string" }, message: "should be string" }];
                    return false;
                }
                var valid0 = _errs0 === errors;
            } else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.vegetarian !== undefined) {
                    const _errs1 = errors;
                    if (typeof data.vegetarian !== "boolean") {
                        validate20.errors = [{ keyword: "type", dataPath: dataPath + "/vegetarian", schemaPath: "#/properties/vegetarian/type", params: { type: "boolean" }, message: "should be boolean" }];
                        return false;
                    }
                    var valid0 = _errs1 === errors;
                } else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.birthDate !== undefined) {
                        const _errs2 = errors;
                        if (typeof data.birthDate !== "string") {
                            validate20.errors = [{ keyword: "type", dataPath: dataPath + "/birthDate", schemaPath: "#/properties/birthDate/type", params: { type: "string" }, message: "should be string" }];
                            return false;
                        }
                        var valid0 = _errs2 === errors;
                    } else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.nationality !== undefined) {
                            let data3 = data.nationality;
                            const _errs3 = errors;
                            if (typeof data3 !== "string") {
                                validate20.errors = [{ keyword: "type", dataPath: dataPath + "/nationality", schemaPath: "#/properties/nationality/type", params: { type: "string" }, message: "should be string" }];
                                return false;
                            }
                            if (!(data3 === "DE" || data3 === "IT" || data3 === "JP" || data3 === "US" || data3 === "RU" || data3 === "Other")) {
                                validate20.errors = [
                                    {
                                        keyword: "enum",
                                        dataPath: dataPath + "/nationality",
                                        schemaPath: "#/properties/nationality/enum",
                                        params: { allowedValues: schema22.properties.nationality.enum },
                                        message: "should be equal to one of the allowed values",
                                    },
                                ];
                                return false;
                            }
                            var valid0 = _errs3 === errors;
                        } else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.personalData !== undefined) {
                                let data4 = data.personalData;
                                const _errs4 = errors;
                                if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
                                    let missing1;
                                    if ((data4.age === undefined && (missing1 = "age")) || (data4.height === undefined && (missing1 = "height"))) {
                                        validate20.errors = [
                                            {
                                                keyword: "required",
                                                dataPath: dataPath + "/personalData",
                                                schemaPath: "#/properties/personalData/required",
                                                params: { missingProperty: missing1 },
                                                message: "should have required property '" + missing1 + "'",
                                            },
                                        ];
                                        return false;
                                    } else {
                                        if (data4.age !== undefined) {
                                            let data5 = data4.age;
                                            const _errs5 = errors;
                                            if (!(typeof data5 == "number" && !(data5 % 1) && !isNaN(data5) && isFinite(data5))) {
                                                validate20.errors = [
                                                    { keyword: "type", dataPath: dataPath + "/personalData/age", schemaPath: "#/properties/personalData/properties/age/type", params: { type: "integer" }, message: "should be integer" },
                                                ];
                                                return false;
                                            }
                                            var valid1 = _errs5 === errors;
                                        } else {
                                            var valid1 = true;
                                        }
                                        if (valid1) {
                                            if (data4.height !== undefined) {
                                                let data6 = data4.height;
                                                const _errs6 = errors;
                                                if (!(typeof data6 == "number" && isFinite(data6))) {
                                                    validate20.errors = [
                                                        {
                                                            keyword: "type",
                                                            dataPath: dataPath + "/personalData/height",
                                                            schemaPath: "#/properties/personalData/properties/height/type",
                                                            params: { type: "number" },
                                                            message: "should be number",
                                                        },
                                                    ];
                                                    return false;
                                                }
                                                var valid1 = _errs6 === errors;
                                            } else {
                                                var valid1 = true;
                                            }
                                            if (valid1) {
                                                if (data4.drivingSkill !== undefined) {
                                                    let data7 = data4.drivingSkill;
                                                    const _errs7 = errors;
                                                    if (typeof data7 == "number" && isFinite(data7)) {
                                                        if (data7 > 10 || isNaN(data7)) {
                                                            validate20.errors = [
                                                                {
                                                                    keyword: "maximum",
                                                                    dataPath: dataPath + "/personalData/drivingSkill",
                                                                    schemaPath: "#/properties/personalData/properties/drivingSkill/maximum",
                                                                    params: { comparison: "<=", limit: 10 },
                                                                    message: "should be <= 10",
                                                                },
                                                            ];
                                                            return false;
                                                        } else {
                                                            if (data7 < 1 || isNaN(data7)) {
                                                                validate20.errors = [
                                                                    {
                                                                        keyword: "minimum",
                                                                        dataPath: dataPath + "/personalData/drivingSkill",
                                                                        schemaPath: "#/properties/personalData/properties/drivingSkill/minimum",
                                                                        params: { comparison: ">=", limit: 1 },
                                                                        message: "should be >= 1",
                                                                    },
                                                                ];
                                                                return false;
                                                            }
                                                        }
                                                    } else {
                                                        validate20.errors = [
                                                            {
                                                                keyword: "type",
                                                                dataPath: dataPath + "/personalData/drivingSkill",
                                                                schemaPath: "#/properties/personalData/properties/drivingSkill/type",
                                                                params: { type: "number" },
                                                                message: "should be number",
                                                            },
                                                        ];
                                                        return false;
                                                    }
                                                    var valid1 = _errs7 === errors;
                                                } else {
                                                    var valid1 = true;
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    validate20.errors = [{ keyword: "type", dataPath: dataPath + "/personalData", schemaPath: "#/properties/personalData/type", params: { type: "object" }, message: "should be object" }];
                                    return false;
                                }
                                var valid0 = _errs4 === errors;
                            } else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.occupation !== undefined) {
                                    const _errs8 = errors;
                                    if (typeof data.occupation !== "string") {
                                        validate20.errors = [{ keyword: "type", dataPath: dataPath + "/occupation", schemaPath: "#/properties/occupation/type", params: { type: "string" }, message: "should be string" }];
                                        return false;
                                    }
                                    var valid0 = _errs8 === errors;
                                } else {
                                    var valid0 = true;
                                }
                                if (valid0) {
                                    if (data.postalCode !== undefined) {
                                        let data9 = data.postalCode;
                                        const _errs9 = errors;
                                        if (typeof data9 === "string") {
                                            if (func8(data9) > 5) {
                                                validate20.errors = [
                                                    { keyword: "maxLength", dataPath: dataPath + "/postalCode", schemaPath: "#/properties/postalCode/maxLength", params: { limit: 5 }, message: "should NOT have more than 5 characters" },
                                                ];
                                                return false;
                                            }
                                        } else {
                                            validate20.errors = [{ keyword: "type", dataPath: dataPath + "/postalCode", schemaPath: "#/properties/postalCode/type", params: { type: "string" }, message: "should be string" }];
                                            return false;
                                        }
                                        var valid0 = _errs9 === errors;
                                    } else {
                                        var valid0 = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        validate20.errors = [{ keyword: "type", dataPath, schemaPath: "#/type", params: { type: "object" }, message: "should be object" }];
        return false;
    }
    validate20.errors = vErrors;
    return errors === 0;
}
