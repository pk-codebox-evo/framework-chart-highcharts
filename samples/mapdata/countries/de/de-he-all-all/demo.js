$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "de-he-06635000-06635014",
            "value": 0
        },
        {
            "hc-key": "de-he-06435000-06435004",
            "value": 1
        },
        {
            "hc-key": "de-he-06535000-06535007",
            "value": 2
        },
        {
            "hc-key": "de-he-06531000-06531018",
            "value": 3
        },
        {
            "hc-key": "de-he-06531000-06531002",
            "value": 4
        },
        {
            "hc-key": "de-he-06635000-06635020",
            "value": 5
        },
        {
            "hc-key": "de-he-06437000-06437002",
            "value": 6
        },
        {
            "hc-key": "de-he-06437000-06437006",
            "value": 7
        },
        {
            "hc-key": "de-he-06636000-06636004",
            "value": 8
        },
        {
            "hc-key": "de-he-06633000-06633012",
            "value": 9
        },
        {
            "hc-key": "de-he-06636000-06636200",
            "value": 10
        },
        {
            "hc-key": "de-he-06633000-06633019",
            "value": 11
        },
        {
            "hc-key": "de-he-06438000-06438011",
            "value": 12
        },
        {
            "hc-key": "de-he-06432000-06432002",
            "value": 13
        },
        {
            "hc-key": "de-he-06534000-06534014",
            "value": 14
        },
        {
            "hc-key": "de-he-06534000-06534010",
            "value": 15
        },
        {
            "hc-key": "de-he-06632000-06632018",
            "value": 16
        },
        {
            "hc-key": "de-he-06632000-06632012",
            "value": 17
        },
        {
            "hc-key": "de-he-06533000-06533014",
            "value": 18
        },
        {
            "hc-key": "de-he-06434000-06434013",
            "value": 19
        },
        {
            "hc-key": "de-he-06433000-06433013",
            "value": 20
        },
        {
            "hc-key": "de-he-06632000-06632011",
            "value": 21
        },
        {
            "hc-key": "de-he-06634000-06634019",
            "value": 22
        },
        {
            "hc-key": "de-he-06631000-06631012",
            "value": 23
        },
        {
            "hc-key": "de-he-06435000-06435028",
            "value": 24
        },
        {
            "hc-key": "de-he-06435000-06435002",
            "value": 25
        },
        {
            "hc-key": "de-he-06636000-06636006",
            "value": 26
        },
        {
            "hc-key": "de-he-06634000-06634024",
            "value": 27
        },
        {
            "hc-key": "de-he-06533000-06533011",
            "value": 28
        },
        {
            "hc-key": "de-he-06634000-06634006",
            "value": 29
        },
        {
            "hc-key": "de-he-06634000-06634022",
            "value": 30
        },
        {
            "hc-key": "de-he-06632000-06632006",
            "value": 31
        },
        {
            "hc-key": "de-he-06535000-06535011",
            "value": 32
        },
        {
            "hc-key": "de-he-06535000-06535012",
            "value": 33
        },
        {
            "hc-key": "de-he-06636000-06636016",
            "value": 34
        },
        {
            "hc-key": "de-he-06532000-06532009",
            "value": 35
        },
        {
            "hc-key": "de-he-06532000-06532005",
            "value": 36
        },
        {
            "hc-key": "de-he-06534000-06534019",
            "value": 37
        },
        {
            "hc-key": "de-he-06534000-06534005",
            "value": 38
        },
        {
            "hc-key": "de-he-06437000-06437013",
            "value": 39
        },
        {
            "hc-key": "de-he-06437000-06437012",
            "value": 40
        },
        {
            "hc-key": "de-he-06633000-06633200",
            "value": 41
        },
        {
            "hc-key": "de-he-06433000-06433001",
            "value": 42
        },
        {
            "hc-key": "de-he-06439000-06439004",
            "value": 43
        },
        {
            "hc-key": "de-he-06438000-06438008",
            "value": 44
        },
        {
            "hc-key": "de-he-06435000-06435019",
            "value": 45
        },
        {
            "hc-key": "de-he-06635000-06635010",
            "value": 46
        },
        {
            "hc-key": "de-he-06635000-06635013",
            "value": 47
        },
        {
            "hc-key": "de-he-06432000-06432008",
            "value": 48
        },
        {
            "hc-key": "de-he-06433000-06433006",
            "value": 49
        },
        {
            "hc-key": "de-he-06439000-06439017",
            "value": 50
        },
        {
            "hc-key": "de-he-06635000-06635021",
            "value": 51
        },
        {
            "hc-key": "de-he-06633000-06633018",
            "value": 52
        },
        {
            "hc-key": "de-he-06432000-06432014",
            "value": 53
        },
        {
            "hc-key": "de-he-06411000-06411000",
            "value": 54
        },
        {
            "hc-key": "de-he-06435000-06435014",
            "value": 55
        },
        {
            "hc-key": "de-he-06634000-06634023",
            "value": 56
        },
        {
            "hc-key": "de-he-06634000-06634011",
            "value": 57
        },
        {
            "hc-key": "de-he-06634000-06634027",
            "value": 58
        },
        {
            "hc-key": "de-he-06432000-06432010",
            "value": 59
        },
        {
            "hc-key": "de-he-06432000-06432004",
            "value": 60
        },
        {
            "hc-key": "de-he-06436000-06436007",
            "value": 61
        },
        {
            "hc-key": "de-he-06412000-06412000",
            "value": 62
        },
        {
            "hc-key": "de-he-06631000-06631016",
            "value": 63
        },
        {
            "hc-key": "de-he-06633000-06633027",
            "value": 64
        },
        {
            "hc-key": "de-he-06633000-06633005",
            "value": 65
        },
        {
            "hc-key": "de-he-06633000-06633004",
            "value": 66
        },
        {
            "hc-key": "de-he-06534000-06534012",
            "value": 67
        },
        {
            "hc-key": "de-he-06534000-06534007",
            "value": 68
        },
        {
            "hc-key": "de-he-06532000-06532001",
            "value": 69
        },
        {
            "hc-key": "de-he-06532000-06532013",
            "value": 70
        },
        {
            "hc-key": "de-he-06531000-06531013",
            "value": 71
        },
        {
            "hc-key": "de-he-06534000-06534013",
            "value": 72
        },
        {
            "hc-key": "de-he-06435000-06435016",
            "value": 73
        },
        {
            "hc-key": "de-he-06436000-06436011",
            "value": 74
        },
        {
            "hc-key": "de-he-06436000-06436012",
            "value": 75
        },
        {
            "hc-key": "de-he-06534000-06534015",
            "value": 76
        },
        {
            "hc-key": "de-he-06534000-06534004",
            "value": 77
        },
        {
            "hc-key": "de-he-06636000-06636011",
            "value": 78
        },
        {
            "hc-key": "de-he-06534000-06534003",
            "value": 79
        },
        {
            "hc-key": "de-he-06634000-06634008",
            "value": 80
        },
        {
            "hc-key": "de-he-06633000-06633003",
            "value": 81
        },
        {
            "hc-key": "de-he-06631000-06631021",
            "value": 82
        },
        {
            "hc-key": "de-he-06631000-06631017",
            "value": 83
        },
        {
            "hc-key": "de-he-06434000-06434010",
            "value": 84
        },
        {
            "hc-key": "de-he-06434000-06434006",
            "value": 85
        },
        {
            "hc-key": "de-he-06636000-06636002",
            "value": 86
        },
        {
            "hc-key": "de-he-06440000-06440013",
            "value": 87
        },
        {
            "hc-key": "de-he-06440000-06440019",
            "value": 88
        },
        {
            "hc-key": "de-he-06532000-06532004",
            "value": 89
        },
        {
            "hc-key": "de-he-06532000-06532006",
            "value": 90
        },
        {
            "hc-key": "de-he-06439000-06439010",
            "value": 91
        },
        {
            "hc-key": "de-he-06433000-06433011",
            "value": 92
        },
        {
            "hc-key": "de-he-06438000-06438001",
            "value": 93
        },
        {
            "hc-key": "de-he-06432000-06432023",
            "value": 94
        },
        {
            "hc-key": "de-he-06433000-06433008",
            "value": 95
        },
        {
            "hc-key": "de-he-06433000-06433009",
            "value": 96
        },
        {
            "hc-key": "de-he-06438000-06438009",
            "value": 97
        },
        {
            "hc-key": "de-he-06435000-06435022",
            "value": 98
        },
        {
            "hc-key": "de-he-06435000-06435023",
            "value": 99
        },
        {
            "hc-key": "de-he-06435000-06435007",
            "value": 100
        },
        {
            "hc-key": "de-he-06532000-06532010",
            "value": 101
        },
        {
            "hc-key": "de-he-06532000-06532020",
            "value": 102
        },
        {
            "hc-key": "de-he-06534000-06534009",
            "value": 103
        },
        {
            "hc-key": "de-he-06534000-06534008",
            "value": 104
        },
        {
            "hc-key": "de-he-06534000-06534020",
            "value": 105
        },
        {
            "hc-key": "de-he-06631000-06631022",
            "value": 106
        },
        {
            "hc-key": "de-he-06631000-06631015",
            "value": 107
        },
        {
            "hc-key": "de-he-06532000-06532023",
            "value": 108
        },
        {
            "hc-key": "de-he-06531000-06531007",
            "value": 109
        },
        {
            "hc-key": "de-he-06532000-06532002",
            "value": 110
        },
        {
            "hc-key": "de-he-06532000-06532015",
            "value": 111
        },
        {
            "hc-key": "de-he-06635000-06635007",
            "value": 112
        },
        {
            "hc-key": "de-he-06635000-06635002",
            "value": 113
        },
        {
            "hc-key": "de-he-06533000-06533019",
            "value": 114
        },
        {
            "hc-key": "de-he-06533000-06533013",
            "value": 115
        },
        {
            "hc-key": "de-he-06440000-06440001",
            "value": 116
        },
        {
            "hc-key": "de-he-06440000-06440017",
            "value": 117
        },
        {
            "hc-key": "de-he-06440000-06440023",
            "value": 118
        },
        {
            "hc-key": "de-he-06440000-06440025",
            "value": 119
        },
        {
            "hc-key": "de-he-06440000-06440008",
            "value": 120
        },
        {
            "hc-key": "de-he-06434000-06434012",
            "value": 121
        },
        {
            "hc-key": "de-he-06436000-06436001",
            "value": 122
        },
        {
            "hc-key": "de-he-06633000-06633028",
            "value": 123
        },
        {
            "hc-key": "de-he-06435000-06435024",
            "value": 124
        },
        {
            "hc-key": "de-he-06435000-06435020",
            "value": 125
        },
        {
            "hc-key": "de-he-06632000-06632009",
            "value": 126
        },
        {
            "hc-key": "de-he-06632000-06632020",
            "value": 127
        },
        {
            "hc-key": "de-he-06631000-06631008",
            "value": 128
        },
        {
            "hc-key": "de-he-06440000-06440020",
            "value": 129
        },
        {
            "hc-key": "de-he-06440000-06440007",
            "value": 130
        },
        {
            "hc-key": "de-he-06440000-06440010",
            "value": 131
        },
        {
            "hc-key": "de-he-06436000-06436005",
            "value": 132
        },
        {
            "hc-key": "de-he-06633000-06633020",
            "value": 133
        },
        {
            "hc-key": "de-he-06437000-06437008",
            "value": 134
        },
        {
            "hc-key": "de-he-06434000-06434008",
            "value": 135
        },
        {
            "hc-key": "de-he-06438000-06438007",
            "value": 136
        },
        {
            "hc-key": "de-he-06438000-06438013",
            "value": 137
        },
        {
            "hc-key": "de-he-06531000-06531012",
            "value": 138
        },
        {
            "hc-key": "de-he-06531000-06531014",
            "value": 139
        },
        {
            "hc-key": "de-he-06636000-06636001",
            "value": 140
        },
        {
            "hc-key": "de-he-06532000-06532011",
            "value": 141
        },
        {
            "hc-key": "de-he-06439000-06439007",
            "value": 142
        },
        {
            "hc-key": "de-he-06439000-06439006",
            "value": 143
        },
        {
            "hc-key": "de-he-06632000-06632017",
            "value": 144
        },
        {
            "hc-key": "de-he-06632000-06632013",
            "value": 145
        },
        {
            "hc-key": "de-he-06634000-06634005",
            "value": 146
        },
        {
            "hc-key": "de-he-06439000-06439016",
            "value": 147
        },
        {
            "hc-key": "de-he-06531000-06531015",
            "value": 148
        },
        {
            "hc-key": "de-he-06531000-06531016",
            "value": 149
        },
        {
            "hc-key": "de-he-06531000-06531004",
            "value": 150
        },
        {
            "hc-key": "de-he-06440000-06440002",
            "value": 151
        },
        {
            "hc-key": "de-he-06440000-06440018",
            "value": 152
        },
        {
            "hc-key": "de-he-06434000-06434011",
            "value": 153
        },
        {
            "hc-key": "de-he-06440000-06440022",
            "value": 154
        },
        {
            "hc-key": "de-he-06438000-06438006",
            "value": 155
        },
        {
            "hc-key": "de-he-06531000-06531017",
            "value": 156
        },
        {
            "hc-key": "de-he-06534000-06534011",
            "value": 157
        },
        {
            "hc-key": "de-he-06436000-06436009",
            "value": 158
        },
        {
            "hc-key": "de-he-06432000-06432011",
            "value": 159
        },
        {
            "hc-key": "de-he-06631000-06631003",
            "value": 160
        },
        {
            "hc-key": "de-he-06631000-06631005",
            "value": 161
        },
        {
            "hc-key": "de-he-06437000-06437007",
            "value": 162
        },
        {
            "hc-key": "de-he-06432000-06432007",
            "value": 163
        },
        {
            "hc-key": "de-he-06438000-06438012",
            "value": 164
        },
        {
            "hc-key": "de-he-06435000-06435015",
            "value": 165
        },
        {
            "hc-key": "de-he-06435000-06435017",
            "value": 166
        },
        {
            "hc-key": "de-he-06535000-06535001",
            "value": 167
        },
        {
            "hc-key": "de-he-06535000-06535010",
            "value": 168
        },
        {
            "hc-key": "de-he-06433000-06433005",
            "value": 169
        },
        {
            "hc-key": "de-he-06433000-06433002",
            "value": 170
        },
        {
            "hc-key": "de-he-06433000-06433012",
            "value": 171
        },
        {
            "hc-key": "de-he-06433000-06433014",
            "value": 172
        },
        {
            "hc-key": "de-he-06433000-06433010",
            "value": 173
        },
        {
            "hc-key": "de-he-06433000-06433007",
            "value": 174
        },
        {
            "hc-key": "de-he-06533000-06533003",
            "value": 175
        },
        {
            "hc-key": "de-he-06434000-06434009",
            "value": 176
        },
        {
            "hc-key": "de-he-06531000-06531011",
            "value": 177
        },
        {
            "hc-key": "de-he-06435000-06435021",
            "value": 178
        },
        {
            "hc-key": "de-he-06440000-06440014",
            "value": 179
        },
        {
            "hc-key": "de-he-06435000-06435026",
            "value": 180
        },
        {
            "hc-key": "de-he-06432000-06432022",
            "value": 181
        },
        {
            "hc-key": "de-he-06432000-06432001",
            "value": 182
        },
        {
            "hc-key": "de-he-06432000-06432003",
            "value": 183
        },
        {
            "hc-key": "de-he-06432000-06432018",
            "value": 184
        },
        {
            "hc-key": "de-he-06435000-06435006",
            "value": 185
        },
        {
            "hc-key": "de-he-06438000-06438002",
            "value": 186
        },
        {
            "hc-key": "de-he-06439000-06439008",
            "value": 187
        },
        {
            "hc-key": "de-he-06439000-06439015",
            "value": 188
        },
        {
            "hc-key": "de-he-06439000-06439011",
            "value": 189
        },
        {
            "hc-key": "de-he-06436000-06436006",
            "value": 190
        },
        {
            "hc-key": "de-he-06535000-06535015",
            "value": 191
        },
        {
            "hc-key": "de-he-06632000-06632015",
            "value": 192
        },
        {
            "hc-key": "de-he-06632000-06632004",
            "value": 193
        },
        {
            "hc-key": "de-he-06633000-06633009",
            "value": 194
        },
        {
            "hc-key": "de-he-06436000-06436008",
            "value": 195
        },
        {
            "hc-key": "de-he-06432000-06432013",
            "value": 196
        },
        {
            "hc-key": "de-he-06535000-06535013",
            "value": 197
        },
        {
            "hc-key": "de-he-06531000-06531010",
            "value": 198
        },
        {
            "hc-key": "de-he-06435000-06435003",
            "value": 199
        },
        {
            "hc-key": "de-he-06435000-06435029",
            "value": 200
        },
        {
            "hc-key": "de-he-06533000-06533004",
            "value": 201
        },
        {
            "hc-key": "de-he-06533000-06533007",
            "value": 202
        },
        {
            "hc-key": "de-he-06533000-06533005",
            "value": 203
        },
        {
            "hc-key": "de-he-06434000-06434001",
            "value": 204
        },
        {
            "hc-key": "de-he-06531000-06531009",
            "value": 205
        },
        {
            "hc-key": "de-he-06432000-06432020",
            "value": 206
        },
        {
            "hc-key": "de-he-06432000-06432016",
            "value": 207
        },
        {
            "hc-key": "de-he-06534000-06534002",
            "value": 208
        },
        {
            "hc-key": "de-he-06432000-06432009",
            "value": 209
        },
        {
            "hc-key": "de-he-06437000-06437003",
            "value": 210
        },
        {
            "hc-key": "de-he-06437000-06437001",
            "value": 211
        },
        {
            "hc-key": "de-he-06432000-06432019",
            "value": 212
        },
        {
            "hc-key": "de-he-06532000-06532019",
            "value": 213
        },
        {
            "hc-key": "de-he-06440000-06440024",
            "value": 214
        },
        {
            "hc-key": "de-he-06440000-06440016",
            "value": 215
        },
        {
            "hc-key": "de-he-06440000-06440021",
            "value": 216
        },
        {
            "hc-key": "de-he-06436000-06436004",
            "value": 217
        },
        {
            "hc-key": "de-he-06435000-06435200",
            "value": 218
        },
        {
            "hc-key": "de-he-06438000-06438003",
            "value": 219
        },
        {
            "hc-key": "de-he-06633000-06633011",
            "value": 220
        },
        {
            "hc-key": "de-he-06633000-06633029",
            "value": 221
        },
        {
            "hc-key": "de-he-06439000-06439003",
            "value": 222
        },
        {
            "hc-key": "de-he-06439000-06439014",
            "value": 223
        },
        {
            "hc-key": "de-he-06433000-06433003",
            "value": 224
        },
        {
            "hc-key": "de-he-06438000-06438005",
            "value": 225
        },
        {
            "hc-key": "de-he-06534000-06534006",
            "value": 226
        },
        {
            "hc-key": "de-he-06433000-06433004",
            "value": 227
        },
        {
            "hc-key": "de-he-06439000-06439001",
            "value": 228
        },
        {
            "hc-key": "de-he-06439000-06439005",
            "value": 229
        },
        {
            "hc-key": "de-he-06435000-06435010",
            "value": 230
        },
        {
            "hc-key": "de-he-06437000-06437005",
            "value": 231
        },
        {
            "hc-key": "de-he-06435000-06435018",
            "value": 232
        },
        {
            "hc-key": "de-he-06440000-06440015",
            "value": 233
        },
        {
            "hc-key": "de-he-06440000-06440005",
            "value": 234
        },
        {
            "hc-key": "de-he-06434000-06434004",
            "value": 235
        },
        {
            "hc-key": "de-he-06532000-06532017",
            "value": 236
        },
        {
            "hc-key": "de-he-06532000-06532012",
            "value": 237
        },
        {
            "hc-key": "de-he-06434000-06434005",
            "value": 238
        },
        {
            "hc-key": "de-he-06435000-06435013",
            "value": 239
        },
        {
            "hc-key": "de-he-06634000-06634012",
            "value": 240
        },
        {
            "hc-key": "de-he-06634000-06634003",
            "value": 241
        },
        {
            "hc-key": "de-he-06634000-06634009",
            "value": 242
        },
        {
            "hc-key": "de-he-06634000-06634002",
            "value": 243
        },
        {
            "hc-key": "de-he-06531000-06531005",
            "value": 244
        },
        {
            "hc-key": "de-he-06436000-06436003",
            "value": 245
        },
        {
            "hc-key": "de-he-06534000-06534018",
            "value": 246
        },
        {
            "hc-key": "de-he-06632000-06632016",
            "value": 247
        },
        {
            "hc-key": "de-he-06634000-06634010",
            "value": 248
        },
        {
            "hc-key": "de-he-06436000-06436010",
            "value": 249
        },
        {
            "hc-key": "de-he-06533000-06533012",
            "value": 250
        },
        {
            "hc-key": "de-he-06533000-06533010",
            "value": 251
        },
        {
            "hc-key": "de-he-06435000-06435008",
            "value": 252
        },
        {
            "hc-key": "de-he-06634000-06634014",
            "value": 253
        },
        {
            "hc-key": "de-he-06440000-06440012",
            "value": 254
        },
        {
            "hc-key": "de-he-06436000-06436002",
            "value": 255
        },
        {
            "hc-key": "de-he-06634000-06634018",
            "value": 256
        },
        {
            "hc-key": "de-he-06440000-06440003",
            "value": 257
        },
        {
            "hc-key": "de-he-06533000-06533015",
            "value": 258
        },
        {
            "hc-key": "de-he-06533000-06533009",
            "value": 259
        },
        {
            "hc-key": "de-he-06535000-06535008",
            "value": 260
        },
        {
            "hc-key": "de-he-06631000-06631014",
            "value": 261
        },
        {
            "hc-key": "de-he-06440000-06440009",
            "value": 262
        },
        {
            "hc-key": "de-he-06535000-06535018",
            "value": 263
        },
        {
            "hc-key": "de-he-06632000-06632007",
            "value": 264
        },
        {
            "hc-key": "de-he-06632000-06632002",
            "value": 265
        },
        {
            "hc-key": "de-he-06435000-06435027",
            "value": 266
        },
        {
            "hc-key": "de-he-06631000-06631004",
            "value": 267
        },
        {
            "hc-key": "de-he-06435000-06435001",
            "value": 268
        },
        {
            "hc-key": "de-he-06533000-06533018",
            "value": 269
        },
        {
            "hc-key": "de-he-06435000-06435009",
            "value": 270
        },
        {
            "hc-key": "de-he-06532000-06532014",
            "value": 271
        },
        {
            "hc-key": "de-he-06535000-06535002",
            "value": 272
        },
        {
            "hc-key": "de-he-06534000-06534016",
            "value": 273
        },
        {
            "hc-key": "de-he-06635000-06635006",
            "value": 274
        },
        {
            "hc-key": "de-he-06635000-06635012",
            "value": 275
        },
        {
            "hc-key": "de-he-06437000-06437011",
            "value": 276
        },
        {
            "hc-key": "de-he-06531000-06531003",
            "value": 277
        },
        {
            "hc-key": "de-he-06434000-06434003",
            "value": 278
        },
        {
            "hc-key": "de-he-06633000-06633001",
            "value": 279
        },
        {
            "hc-key": "de-he-06635000-06635011",
            "value": 280
        },
        {
            "hc-key": "de-he-06533000-06533017",
            "value": 281
        },
        {
            "hc-key": "de-he-06532000-06532003",
            "value": 282
        },
        {
            "hc-key": "de-he-06532000-06532022",
            "value": 283
        },
        {
            "hc-key": "de-he-06533000-06533001",
            "value": 284
        },
        {
            "hc-key": "de-he-06636000-06636014",
            "value": 285
        },
        {
            "hc-key": "de-he-06636000-06636008",
            "value": 286
        },
        {
            "hc-key": "de-he-06636000-06636015",
            "value": 287
        },
        {
            "hc-key": "de-he-06631000-06631011",
            "value": 288
        },
        {
            "hc-key": "de-he-06636000-06636003",
            "value": 289
        },
        {
            "hc-key": "de-he-06636000-06636007",
            "value": 290
        },
        {
            "hc-key": "de-he-06634000-06634013",
            "value": 291
        },
        {
            "hc-key": "de-he-06634000-06634015",
            "value": 292
        },
        {
            "hc-key": "de-he-06438000-06438010",
            "value": 293
        },
        {
            "hc-key": "de-he-06535000-06535017",
            "value": 294
        },
        {
            "hc-key": "de-he-06535000-06535003",
            "value": 295
        },
        {
            "hc-key": "de-he-06531000-06531006",
            "value": 296
        },
        {
            "hc-key": "de-he-06535000-06535009",
            "value": 297
        },
        {
            "hc-key": "de-he-06534000-06534001",
            "value": 298
        },
        {
            "hc-key": "de-he-06631000-06631001",
            "value": 299
        },
        {
            "hc-key": "de-he-06535000-06535004",
            "value": 300
        },
        {
            "hc-key": "de-he-06631000-06631018",
            "value": 301
        },
        {
            "hc-key": "de-he-06535000-06535019",
            "value": 302
        },
        {
            "hc-key": "de-he-06632000-06632005",
            "value": 303
        },
        {
            "hc-key": "de-he-06636000-06636012",
            "value": 304
        },
        {
            "hc-key": "de-he-06635000-06635017",
            "value": 305
        },
        {
            "hc-key": "de-he-06632000-06632014",
            "value": 306
        },
        {
            "hc-key": "de-he-06634000-06634004",
            "value": 307
        },
        {
            "hc-key": "de-he-06531000-06531001",
            "value": 308
        },
        {
            "hc-key": "de-he-06533000-06533008",
            "value": 309
        },
        {
            "hc-key": "de-he-06634000-06634016",
            "value": 310
        },
        {
            "hc-key": "de-he-06535000-06535014",
            "value": 311
        },
        {
            "hc-key": "de-he-06635000-06635004",
            "value": 312
        },
        {
            "hc-key": "de-he-06633000-06633006",
            "value": 313
        },
        {
            "hc-key": "de-he-06633000-06633023",
            "value": 314
        },
        {
            "hc-key": "de-he-06634000-06634007",
            "value": 315
        },
        {
            "hc-key": "de-he-06535000-06535005",
            "value": 316
        },
        {
            "hc-key": "de-he-06633000-06633024",
            "value": 317
        },
        {
            "hc-key": "de-he-06633000-06633013",
            "value": 318
        },
        {
            "hc-key": "de-he-06532000-06532021",
            "value": 319
        },
        {
            "hc-key": "de-he-06636000-06636009",
            "value": 320
        },
        {
            "hc-key": "de-he-06440000-06440006",
            "value": 321
        },
        {
            "hc-key": "de-he-06440000-06440004",
            "value": 322
        },
        {
            "hc-key": "de-he-06435000-06435012",
            "value": 323
        },
        {
            "hc-key": "de-he-06438000-06438004",
            "value": 324
        },
        {
            "hc-key": "de-he-06611000-06611000",
            "value": 325
        },
        {
            "hc-key": "de-he-06633000-06633017",
            "value": 326
        },
        {
            "hc-key": "de-he-06633000-06633026",
            "value": 327
        },
        {
            "hc-key": "de-he-06633000-06633008",
            "value": 328
        },
        {
            "hc-key": "de-he-06635000-06635015",
            "value": 329
        },
        {
            "hc-key": "de-he-06631000-06631013",
            "value": 330
        },
        {
            "hc-key": "de-he-06631000-06631020",
            "value": 331
        },
        {
            "hc-key": "de-he-06413000-06413000",
            "value": 332
        },
        {
            "hc-key": "de-he-06439000-06439002",
            "value": 333
        },
        {
            "hc-key": "de-he-06435000-06435025",
            "value": 334
        },
        {
            "hc-key": "de-he-06437000-06437010",
            "value": 335
        },
        {
            "hc-key": "de-he-06437000-06437009",
            "value": 336
        },
        {
            "hc-key": "de-he-06631000-06631006",
            "value": 337
        },
        {
            "hc-key": "de-he-06631000-06631009",
            "value": 338
        },
        {
            "hc-key": "de-he-06631000-06631023",
            "value": 339
        },
        {
            "hc-key": "de-he-06635000-06635009",
            "value": 340
        },
        {
            "hc-key": "de-he-06635000-06635003",
            "value": 341
        },
        {
            "hc-key": "de-he-06631000-06631002",
            "value": 342
        },
        {
            "hc-key": "de-he-06631000-06631007",
            "value": 343
        },
        {
            "hc-key": "de-he-06632000-06632008",
            "value": 344
        },
        {
            "hc-key": "de-he-06532000-06532008",
            "value": 345
        },
        {
            "hc-key": "de-he-06532000-06532016",
            "value": 346
        },
        {
            "hc-key": "de-he-06633000-06633015",
            "value": 347
        },
        {
            "hc-key": "de-he-06533000-06533006",
            "value": 348
        },
        {
            "hc-key": "de-he-06432000-06432012",
            "value": 349
        },
        {
            "hc-key": "de-he-06432000-06432015",
            "value": 350
        },
        {
            "hc-key": "de-he-06414000-06414000",
            "value": 351
        },
        {
            "hc-key": "de-he-06533000-06533016",
            "value": 352
        },
        {
            "hc-key": "de-he-06432000-06432006",
            "value": 353
        },
        {
            "hc-key": "de-he-06632000-06632010",
            "value": 354
        },
        {
            "hc-key": "de-he-06633000-06633021",
            "value": 355
        },
        {
            "hc-key": "de-he-06633000-06633016",
            "value": 356
        },
        {
            "hc-key": "de-he-06633000-06633010",
            "value": 357
        },
        {
            "hc-key": "de-he-06534000-06534022",
            "value": 358
        },
        {
            "hc-key": "de-he-06534000-06534021",
            "value": 359
        },
        {
            "hc-key": "de-he-06633000-06633025",
            "value": 360
        },
        {
            "hc-key": "de-he-06633000-06633002",
            "value": 361
        },
        {
            "hc-key": "de-he-06633000-06633007",
            "value": 362
        },
        {
            "hc-key": "de-he-06633000-06633014",
            "value": 363
        },
        {
            "hc-key": "de-he-06634000-06634026",
            "value": 364
        },
        {
            "hc-key": "de-he-06634000-06634017",
            "value": 365
        },
        {
            "hc-key": "de-he-06432000-06432005",
            "value": 366
        },
        {
            "hc-key": "de-he-06634000-06634020",
            "value": 367
        },
        {
            "hc-key": "de-he-06634000-06634021",
            "value": 368
        },
        {
            "hc-key": "de-he-06532000-06532018",
            "value": 369
        },
        {
            "hc-key": "de-he-06439000-06439012",
            "value": 370
        },
        {
            "hc-key": "de-he-06635000-06635019",
            "value": 371
        },
        {
            "hc-key": "de-he-06532000-06532007",
            "value": 372
        },
        {
            "hc-key": "de-he-06631000-06631010",
            "value": 373
        },
        {
            "hc-key": "de-he-06635000-06635008",
            "value": 374
        },
        {
            "hc-key": "de-he-06535000-06535006",
            "value": 375
        },
        {
            "hc-key": "de-he-06439000-06439013",
            "value": 376
        },
        {
            "hc-key": "de-he-06636000-06636005",
            "value": 377
        },
        {
            "hc-key": "de-he-06437000-06437004",
            "value": 378
        },
        {
            "hc-key": "de-he-06635000-06635005",
            "value": 379
        },
        {
            "hc-key": "de-he-06632000-06632003",
            "value": 380
        },
        {
            "hc-key": "de-he-06437000-06437014",
            "value": 381
        },
        {
            "hc-key": "de-he-06440000-06440011",
            "value": 382
        },
        {
            "hc-key": "de-he-06535000-06535016",
            "value": 383
        },
        {
            "hc-key": "de-he-06632000-06632001",
            "value": 384
        },
        {
            "hc-key": "de-he-06635000-06635022",
            "value": 385
        },
        {
            "hc-key": "de-he-06435000-06435005",
            "value": 386
        },
        {
            "hc-key": "de-he-06635000-06635016",
            "value": 387
        },
        {
            "hc-key": "de-he-06531000-06531008",
            "value": 388
        },
        {
            "hc-key": "de-he-06635000-06635001",
            "value": 389
        },
        {
            "hc-key": "de-he-06636000-06636013",
            "value": 390
        },
        {
            "hc-key": "de-he-06633000-06633022",
            "value": 391
        },
        {
            "hc-key": "de-he-06435000-06435011",
            "value": 392
        },
        {
            "hc-key": "de-he-06434000-06434002",
            "value": 393
        },
        {
            "hc-key": "de-he-06434000-06434007",
            "value": 394
        },
        {
            "hc-key": "de-he-06636000-06636010",
            "value": 395
        },
        {
            "hc-key": "de-he-06437000-06437015",
            "value": 396
        },
        {
            "hc-key": "de-he-06634000-06634001",
            "value": 397
        },
        {
            "hc-key": "de-he-06534000-06534017",
            "value": 398
        },
        {
            "hc-key": "de-he-06634000-06634025",
            "value": 399
        },
        {
            "hc-key": "de-he-06439000-06439009",
            "value": 400
        },
        {
            "hc-key": "de-he-06632000-06632019",
            "value": 401
        },
        {
            "hc-key": "de-he-06533000-06533002",
            "value": 402
        },
        {
            "hc-key": "de-he-06631000-06631019",
            "value": 403
        },
        {
            "hc-key": "de-he-06432000-06432021",
            "value": 404
        },
        {
            "hc-key": "de-he-06432000-06432017",
            "value": 405
        },
        {
            "hc-key": "de-he-06635000-06635018",
            "value": 406
        },
        {
            "value": 407
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="https://code.highcharts.com/mapdata/countries/de/de-he-all-all.js">Hessen</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/de/de-he-all-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#a4edba'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
