const areaOptions = [
  {
    name: '广东省',
    disabled: false,
    id: 440000,
    children: [{
      name: '广州市',
      disabled: false,
      id: 440100,
      children: [{
        name: '荔湾区',
        disabled: false,
        id: 440103
      },
      {
        name: '越秀区',
        disabled: false,
        id: 440104
      },
      {
        name: '海珠区',
        disabled: false,
        id: 440105
      },
      {
        name: '天河区',
        disabled: false,
        id: 440106
      },
      {
        name: '白云区',
        disabled: false,
        id: 440111
      },
      {
        name: '黄埔区',
        disabled: false,
        id: 440112
      },
      {
        name: '番禺区',
        disabled: false,
        id: 440113
      },
      {
        name: '花都区',
        disabled: false,
        id: 440114
      },
      {
        name: '南沙区',
        disabled: false,
        id: 440115
      },
      {
        name: '从化区',
        disabled: false,
        id: 440117
      },
      {
        name: '增城区',
        disabled: false,
        id: 440118
      }]
    },
    {
      name: '韶关市',
      disabled: false,
      id: 440200,
      children: [{
        name: '武江区',
        disabled: false,
        id: 440203
      },
      {
        name: '浈江区',
        disabled: false,
        id: 440204
      },
      {
        name: '曲江区',
        disabled: false,
        id: 440205
      },
      {
        name: '始兴县',
        disabled: false,
        id: 440222
      },
      {
        name: '仁化县',
        disabled: false,
        id: 440224
      },
      {
        name: '翁源县',
        disabled: false,
        id: 440229
      },
      {
        name: '乳源瑶族自治县',
        disabled: false,
        id: 440232
      },
      {
        name: '新丰县',
        disabled: false,
        id: 440233
      },
      {
        name: '乐昌市',
        disabled: false,
        id: 440281
      },
      {
        name: '南雄市',
        disabled: false,
        id: 440282
      }]
    },
    {
      name: '深圳市',
      disabled: false,
      id: 440300,
      children: [{
        name: '罗湖区',
        disabled: false,
        id: 440303
      },
      {
        name: '福田区',
        disabled: false,
        id: 440304
      },
      {
        name: '南山区',
        disabled: false,
        id: 440305
      },
      {
        name: '宝安区',
        disabled: false,
        id: 440306
      },
      {
        name: '龙岗区',
        disabled: false,
        id: 440307
      },
      {
        name: '盐田区',
        disabled: false,
        id: 440308
      },
      {
        name: '龙华区',
        disabled: false,
        id: 440309
      },
      {
        name: '坪山区',
        disabled: false,
        id: 440310
      },
      {
        name: '光明区',
        disabled: false,
        id: 440311
      }]
    },
    {
      name: '珠海市',
      disabled: false,
      id: 440400,
      children: [{
        name: '香洲区',
        disabled: false,
        id: 440402
      },
      {
        name: '斗门区',
        disabled: false,
        id: 440403
      },
      {
        name: '金湾区',
        disabled: false,
        id: 440404
      }]
    },
    {
      name: '汕头市',
      disabled: false,
      id: 440500,
      children: [{
        name: '龙湖区',
        disabled: false,
        id: 440507
      },
      {
        name: '金平区',
        disabled: false,
        id: 440511
      },
      {
        name: '濠江区',
        disabled: false,
        id: 440512
      },
      {
        name: '潮阳区',
        disabled: false,
        id: 440513
      },
      {
        name: '潮南区',
        disabled: false,
        id: 440514
      },
      {
        name: '澄海区',
        disabled: false,
        id: 440515
      },
      {
        name: '南澳县',
        disabled: false,
        id: 440523
      }]
    },
    {
      name: '佛山市',
      disabled: false,
      id: 440600,
      children: [{
        name: '禅城区',
        disabled: false,
        id: 440604
      },
      {
        name: '南海区',
        disabled: false,
        id: 440605
      },
      {
        name: '顺德区',
        disabled: false,
        id: 440606
      },
      {
        name: '三水区',
        disabled: false,
        id: 440607
      },
      {
        name: '高明区',
        disabled: false,
        id: 440608
      }]
    },
    {
      name: '江门市',
      disabled: false,
      id: 440700,
      children: [{
        name: '蓬江区',
        disabled: false,
        id: 440703
      },
      {
        name: '江海区',
        disabled: false,
        id: 440704
      },
      {
        name: '新会区',
        disabled: false,
        id: 440705
      },
      {
        name: '台山市',
        disabled: false,
        id: 440781
      },
      {
        name: '开平市',
        disabled: false,
        id: 440783
      },
      {
        name: '鹤山市',
        disabled: false,
        id: 440784
      },
      {
        name: '恩平市',
        disabled: false,
        id: 440785
      }]
    },
    {
      name: '湛江市',
      disabled: false,
      id: 440800,
      children: [{
        name: '赤坎区',
        disabled: false,
        id: 440802
      },
      {
        name: '霞山区',
        disabled: false,
        id: 440803
      },
      {
        name: '坡头区',
        disabled: false,
        id: 440804
      },
      {
        name: '麻章区',
        disabled: false,
        id: 440811
      },
      {
        name: '遂溪县',
        disabled: false,
        id: 440823
      },
      {
        name: '徐闻县',
        disabled: false,
        id: 440825
      },
      {
        name: '廉江市',
        disabled: false,
        id: 440881
      },
      {
        name: '雷州市',
        disabled: false,
        id: 440882
      },
      {
        name: '吴川市',
        disabled: false,
        id: 440883
      },
      {
        name: '经济技术开发区',
        disabled: false,
        id: 440890
      }]
    },
    {
      name: '茂名市',
      disabled: false,
      id: 440900,
      children: [{
        name: '茂南区',
        disabled: false,
        id: 440902
      },
      {
        name: '电白区',
        disabled: false,
        id: 440904
      },
      {
        name: '高州市',
        disabled: false,
        id: 440981
      },
      {
        name: '化州市',
        disabled: false,
        id: 440982
      },
      {
        name: '信宜市',
        disabled: false,
        id: 440983
      }]
    },
    {
      name: '肇庆市',
      disabled: false,
      id: 441200,
      children: [{
        name: '端州区',
        disabled: false,
        id: 441202
      },
      {
        name: '鼎湖区',
        disabled: false,
        id: 441203
      },
      {
        name: '高要区',
        disabled: false,
        id: 441204
      },
      {
        name: '广宁县',
        disabled: false,
        id: 441223
      },
      {
        name: '怀集县',
        disabled: false,
        id: 441224
      },
      {
        name: '封开县',
        disabled: false,
        id: 441225
      },
      {
        name: '德庆县',
        disabled: false,
        id: 441226
      },
      {
        name: '四会市',
        disabled: false,
        id: 441284
      }]
    },
    {
      name: '惠州市',
      disabled: false,
      id: 441300,
      children: [{
        name: '惠城区',
        disabled: false,
        id: 441302
      },
      {
        name: '惠阳区',
        disabled: false,
        id: 441303
      },
      {
        name: '博罗县',
        disabled: false,
        id: 441322
      },
      {
        name: '惠东县',
        disabled: false,
        id: 441323
      },
      {
        name: '龙门县',
        disabled: false,
        id: 441324
      }]
    },
    {
      name: '梅州市',
      disabled: false,
      id: 441400,
      children: [{
        name: '梅江区',
        disabled: false,
        id: 441402
      },
      {
        name: '梅县区',
        disabled: false,
        id: 441403
      },
      {
        name: '大埔县',
        disabled: false,
        id: 441422
      },
      {
        name: '丰顺县',
        disabled: false,
        id: 441423
      },
      {
        name: '五华县',
        disabled: false,
        id: 441424
      },
      {
        name: '平远县',
        disabled: false,
        id: 441426
      },
      {
        name: '蕉岭县',
        disabled: false,
        id: 441427
      },
      {
        name: '兴宁市',
        disabled: false,
        id: 441481
      }]
    },
    {
      name: '汕尾市',
      disabled: false,
      id: 441500,
      children: [{
        name: '城区',
        disabled: false,
        id: 441502
      },
      {
        name: '海丰县',
        disabled: false,
        id: 441521
      },
      {
        name: '陆河县',
        disabled: false,
        id: 441523
      },
      {
        name: '陆丰市',
        disabled: false,
        id: 441581
      }]
    },
    {
      name: '河源市',
      disabled: false,
      id: 441600,
      children: [{
        name: '源城区',
        disabled: false,
        id: 441602
      },
      {
        name: '紫金县',
        disabled: false,
        id: 441621
      },
      {
        name: '龙川县',
        disabled: false,
        id: 441622
      },
      {
        name: '连平县',
        disabled: false,
        id: 441623
      },
      {
        name: '和平县',
        disabled: false,
        id: 441624
      },
      {
        name: '东源县',
        disabled: false,
        id: 441625
      }]
    },
    {
      name: '阳江市',
      disabled: false,
      id: 441700,
      children: [{
        name: '江城区',
        disabled: false,
        id: 441702
      },
      {
        name: '阳东区',
        disabled: false,
        id: 441704
      },
      {
        name: '阳西县',
        disabled: false,
        id: 441721
      },
      {
        name: '阳春市',
        disabled: false,
        id: 441781
      }]
    },
    {
      name: '清远市',
      disabled: false,
      id: 441800,
      children: [{
        name: '清城区',
        disabled: false,
        id: 441802
      },
      {
        name: '清新区',
        disabled: false,
        id: 441803
      },
      {
        name: '佛冈县',
        disabled: false,
        id: 441821
      },
      {
        name: '阳山县',
        disabled: false,
        id: 441823
      },
      {
        name: '连山壮族瑶族自治县',
        disabled: false,
        id: 441825
      },
      {
        name: '连南瑶族自治县',
        disabled: false,
        id: 441826
      },
      {
        name: '英德市',
        disabled: false,
        id: 441881
      },
      {
        name: '连州市',
        disabled: false,
        id: 441882
      }]
    },
    {
      name: '东莞市',
      disabled: false,
      id: 441900,
      children: [{
        name: '中堂镇',
        disabled: false,
        id: 441901
      },
      {
        name: '南城街道办事处',
        disabled: false,
        id: 441903
      },
      {
        name: '长安镇',
        disabled: false,
        id: 441904
      },
      {
        name: '东坑镇',
        disabled: false,
        id: 441905
      },
      {
        name: '樟木头镇',
        disabled: false,
        id: 441906
      },
      {
        name: '莞城街道办事处',
        disabled: false,
        id: 441907
      },
      {
        name: '石龙镇',
        disabled: false,
        id: 441908
      },
      {
        name: '桥头镇',
        disabled: false,
        id: 441909
      },
      {
        name: '万江街道办事处',
        disabled: false,
        id: 441910
      },
      {
        name: '麻涌镇',
        disabled: false,
        id: 441911
      },
      {
        name: '虎门镇',
        disabled: false,
        id: 441912
      },
      {
        name: '谢岗镇',
        disabled: false,
        id: 441913
      },
      {
        name: '石碣镇',
        disabled: false,
        id: 441914
      },
      {
        name: '茶山镇',
        disabled: false,
        id: 441915
      },
      {
        name: '东城街道办事处',
        disabled: false,
        id: 441916
      },
      {
        name: '洪梅镇',
        disabled: false,
        id: 441917
      },
      {
        name: '道滘镇',
        disabled: false,
        id: 441918
      },
      {
        name: '高埗镇',
        disabled: false,
        id: 441919
      },
      {
        name: '企石镇',
        disabled: false,
        id: 441920
      },
      {
        name: '凤岗镇',
        disabled: false,
        id: 441921
      },
      {
        name: '大岭山镇',
        disabled: false,
        id: 441922
      },
      {
        name: '松山湖管委会',
        disabled: false,
        id: 441923
      },
      {
        name: '清溪镇',
        disabled: false,
        id: 441924
      },
      {
        name: '望牛墩镇',
        disabled: false,
        id: 441925
      },
      {
        name: '厚街镇',
        disabled: false,
        id: 441926
      },
      {
        name: '常平镇',
        disabled: false,
        id: 441927
      },
      {
        name: '寮步镇',
        disabled: false,
        id: 441928
      },
      {
        name: '石排镇',
        disabled: false,
        id: 441929
      },
      {
        name: '横沥镇',
        disabled: false,
        id: 441930
      },
      {
        name: '塘厦镇',
        disabled: false,
        id: 441931
      },
      {
        name: '黄江镇',
        disabled: false,
        id: 441932
      },
      {
        name: '大朗镇',
        disabled: false,
        id: 441933
      },
      {
        name: '东莞港',
        disabled: false,
        id: 441934
      },
      {
        name: '东莞生态园',
        disabled: false,
        id: 441935
      },
      {
        name: '沙田镇',
        disabled: false,
        id: 441990
      }]
    },
    {
      name: '中山市',
      disabled: false,
      id: 442000,
      children: [{
        name: '南头镇',
        disabled: false,
        id: 442001
      },
      {
        name: '神湾镇',
        disabled: false,
        id: 442002
      },
      {
        name: '东凤镇',
        disabled: false,
        id: 442003
      },
      {
        name: '五桂山街道办事处',
        disabled: false,
        id: 442004
      },
      {
        name: '黄圃镇',
        disabled: false,
        id: 442005
      },
      {
        name: '小榄镇',
        disabled: false,
        id: 442006
      },
      {
        name: '石岐区街道办事处',
        disabled: false,
        id: 442007
      },
      {
        name: '横栏镇',
        disabled: false,
        id: 442008
      },
      {
        name: '三角镇',
        disabled: false,
        id: 442009
      },
      {
        name: '三乡镇',
        disabled: false,
        id: 442010
      },
      {
        name: '港口镇',
        disabled: false,
        id: 442011
      },
      {
        name: '沙溪镇',
        disabled: false,
        id: 442012
      },
      {
        name: '板芙镇',
        disabled: false,
        id: 442013
      },
      {
        name: '东升镇',
        disabled: false,
        id: 442015
      },
      {
        name: '阜沙镇',
        disabled: false,
        id: 442016
      },
      {
        name: '民众镇',
        disabled: false,
        id: 442017
      },
      {
        name: '东区街道办事处',
        disabled: false,
        id: 442018
      },
      {
        name: '火炬开发区街道办事处',
        disabled: false,
        id: 442019
      },
      {
        name: '西区街道办事处',
        disabled: false,
        id: 442020
      },
      {
        name: '南区街道办事处',
        disabled: false,
        id: 442021
      },
      {
        name: '古镇镇',
        disabled: false,
        id: 442022
      },
      {
        name: '坦洲镇',
        disabled: false,
        id: 442023
      },
      {
        name: '大涌镇',
        disabled: false,
        id: 442024
      },
      {
        name: '南朗镇',
        disabled: false,
        id: 442025
      }]
    },
    {
      name: '潮州市',
      disabled: false,
      id: 445100,
      children: [{
        name: '湘桥区',
        disabled: false,
        id: 445102
      },
      {
        name: '潮安区',
        disabled: false,
        id: 445103
      },
      {
        name: '饶平县',
        disabled: false,
        id: 445122
      }]
    },
    {
      name: '揭阳市',
      disabled: false,
      id: 445200,
      children: [{
        name: '榕城区',
        disabled: false,
        id: 445202
      },
      {
        name: '揭东区',
        disabled: false,
        id: 445203
      },
      {
        name: '揭西县',
        disabled: false,
        id: 445222
      },
      {
        name: '惠来县',
        disabled: false,
        id: 445224
      },
      {
        name: '普宁市',
        disabled: false,
        id: 445281
      }]
    },
    {
      name: '云浮市',
      disabled: false,
      id: 445300,
      children: [{
        name: '云城区',
        disabled: false,
        id: 445302
      },
      {
        name: '云安区',
        disabled: false,
        id: 445303
      },
      {
        name: '新兴县',
        disabled: false,
        id: 445321
      },
      {
        name: '郁南县',
        disabled: false,
        id: 445322
      },
      {
        name: '罗定市',
        disabled: false,
        id: 445381
      }]
    }]
  },
  {
    name: '浙江省',
    disabled: false,
    id: 330000,
    children: [{
      name: '杭州市',
      disabled: false,
      id: 330100,
      children: [{
        name: '上城区',
        disabled: false,
        id: 330102
      },
      {
        name: '下城区',
        disabled: false,
        id: 330103
      },
      {
        name: '江干区',
        disabled: false,
        id: 330104
      },
      {
        name: '拱墅区',
        disabled: false,
        id: 330105
      },
      {
        name: '西湖区',
        disabled: false,
        id: 330106
      },
      {
        name: '滨江区',
        disabled: false,
        id: 330108
      },
      {
        name: '萧山区',
        disabled: false,
        id: 330109
      },
      {
        name: '余杭区',
        disabled: false,
        id: 330110
      },
      {
        name: '富阳区',
        disabled: false,
        id: 330111
      },
      {
        name: '临安区',
        disabled: false,
        id: 330112
      },
      {
        name: '桐庐县',
        disabled: false,
        id: 330122
      },
      {
        name: '淳安县',
        disabled: false,
        id: 330127
      },
      {
        name: '建德市',
        disabled: false,
        id: 330182
      }]
    },
    {
      name: '宁波市',
      disabled: false,
      id: 330200,
      children: [{
        name: '海曙区',
        disabled: false,
        id: 330203
      },
      {
        name: '江北区',
        disabled: false,
        id: 330205
      },
      {
        name: '北仑区',
        disabled: false,
        id: 330206
      },
      {
        name: '镇海区',
        disabled: false,
        id: 330211
      },
      {
        name: '鄞州区',
        disabled: false,
        id: 330212
      },
      {
        name: '奉化区',
        disabled: false,
        id: 330213
      },
      {
        name: '象山县',
        disabled: false,
        id: 330225
      },
      {
        name: '宁海县',
        disabled: false,
        id: 330226
      },
      {
        name: '余姚市',
        disabled: false,
        id: 330281
      },
      {
        name: '慈溪市',
        disabled: false,
        id: 330282
      }]
    },
    {
      name: '温州市',
      disabled: false,
      id: 330300,
      children: [{
        name: '鹿城区',
        disabled: false,
        id: 330302
      },
      {
        name: '龙湾区',
        disabled: false,
        id: 330303
      },
      {
        name: '瓯海区',
        disabled: false,
        id: 330304
      },
      {
        name: '洞头区',
        disabled: false,
        id: 330305
      },
      {
        name: '永嘉县',
        disabled: false,
        id: 330324
      },
      {
        name: '平阳县',
        disabled: false,
        id: 330326
      },
      {
        name: '苍南县',
        disabled: false,
        id: 330327
      },
      {
        name: '文成县',
        disabled: false,
        id: 330328
      },
      {
        name: '泰顺县',
        disabled: false,
        id: 330329
      },
      {
        name: '瑞安市',
        disabled: false,
        id: 330381
      },
      {
        name: '乐清市',
        disabled: false,
        id: 330382
      }]
    },
    {
      name: '嘉兴市',
      disabled: false,
      id: 330400,
      children: [{
        name: '南湖区',
        disabled: false,
        id: 330402
      },
      {
        name: '秀洲区',
        disabled: false,
        id: 330411
      },
      {
        name: '嘉善县',
        disabled: false,
        id: 330421
      },
      {
        name: '海盐县',
        disabled: false,
        id: 330424
      },
      {
        name: '海宁市',
        disabled: false,
        id: 330481
      },
      {
        name: '平湖市',
        disabled: false,
        id: 330482
      },
      {
        name: '桐乡市',
        disabled: false,
        id: 330483
      }]
    },
    {
      name: '湖州市',
      disabled: false,
      id: 330500,
      children: [{
        name: '吴兴区',
        disabled: false,
        id: 330502
      },
      {
        name: '南浔区',
        disabled: false,
        id: 330503
      },
      {
        name: '德清县',
        disabled: false,
        id: 330521
      },
      {
        name: '长兴县',
        disabled: false,
        id: 330522
      },
      {
        name: '安吉县',
        disabled: false,
        id: 330523
      }]
    },
    {
      name: '绍兴市',
      disabled: false,
      id: 330600,
      children: [{
        name: '越城区',
        disabled: false,
        id: 330602
      },
      {
        name: '柯桥区',
        disabled: false,
        id: 330603
      },
      {
        name: '上虞区',
        disabled: false,
        id: 330604
      },
      {
        name: '新昌县',
        disabled: false,
        id: 330624
      },
      {
        name: '诸暨市',
        disabled: false,
        id: 330681
      },
      {
        name: '嵊州市',
        disabled: false,
        id: 330683
      }]
    },
    {
      name: '金华市',
      disabled: false,
      id: 330700,
      children: [{
        name: '婺城区',
        disabled: false,
        id: 330702
      },
      {
        name: '金东区',
        disabled: false,
        id: 330703
      },
      {
        name: '武义县',
        disabled: false,
        id: 330723
      },
      {
        name: '浦江县',
        disabled: false,
        id: 330726
      },
      {
        name: '磐安县',
        disabled: false,
        id: 330727
      },
      {
        name: '兰溪市',
        disabled: false,
        id: 330781
      },
      {
        name: '义乌市',
        disabled: false,
        id: 330782
      },
      {
        name: '东阳市',
        disabled: false,
        id: 330783
      },
      {
        name: '永康市',
        disabled: false,
        id: 330784
      }]
    },
    {
      name: '衢州市',
      disabled: false,
      id: 330800,
      children: [{
        name: '柯城区',
        disabled: false,
        id: 330802
      },
      {
        name: '衢江区',
        disabled: false,
        id: 330803
      },
      {
        name: '常山县',
        disabled: false,
        id: 330822
      },
      {
        name: '开化县',
        disabled: false,
        id: 330824
      },
      {
        name: '龙游县',
        disabled: false,
        id: 330825
      },
      {
        name: '江山市',
        disabled: false,
        id: 330881
      }]
    },
    {
      name: '舟山市',
      disabled: false,
      id: 330900,
      children: [{
        name: '定海区',
        disabled: false,
        id: 330902
      },
      {
        name: '普陀区',
        disabled: false,
        id: 330903
      },
      {
        name: '岱山县',
        disabled: false,
        id: 330921
      },
      {
        name: '嵊泗县',
        disabled: false,
        id: 330922
      }]
    },
    {
      name: '台州市',
      disabled: false,
      id: 331000,
      children: [{
        name: '椒江区',
        disabled: false,
        id: 331002
      },
      {
        name: '黄岩区',
        disabled: false,
        id: 331003
      },
      {
        name: '路桥区',
        disabled: false,
        id: 331004
      },
      {
        name: '三门县',
        disabled: false,
        id: 331022
      },
      {
        name: '天台县',
        disabled: false,
        id: 331023
      },
      {
        name: '仙居县',
        disabled: false,
        id: 331024
      },
      {
        name: '温岭市',
        disabled: false,
        id: 331081
      },
      {
        name: '临海市',
        disabled: false,
        id: 331082
      },
      {
        name: '玉环市',
        disabled: false,
        id: 331083
      }]
    },
    {
      name: '丽水市',
      disabled: false,
      id: 331100,
      children: [{
        name: '莲都区',
        disabled: false,
        id: 331102
      },
      {
        name: '青田县',
        disabled: false,
        id: 331121
      },
      {
        name: '缙云县',
        disabled: false,
        id: 331122
      },
      {
        name: '遂昌县',
        disabled: false,
        id: 331123
      },
      {
        name: '松阳县',
        disabled: false,
        id: 331124
      },
      {
        name: '云和县',
        disabled: false,
        id: 331125
      },
      {
        name: '庆元县',
        disabled: false,
        id: 331126
      },
      {
        name: '景宁畲族自治县',
        disabled: false,
        id: 331127
      },
      {
        name: '龙泉市',
        disabled: false,
        id: 331181
      }]
    }]
  },
  {
    name: '江苏省',
    disabled: false,
    id: 320000,
    children: [{
      name: '南京市',
      disabled: false,
      id: 320100,
      children: [{
        name: '玄武区',
        disabled: false,
        id: 320102
      },
      {
        name: '秦淮区',
        disabled: false,
        id: 320104
      },
      {
        name: '建邺区',
        disabled: false,
        id: 320105
      },
      {
        name: '鼓楼区',
        disabled: false,
        id: 320106
      },
      {
        name: '浦口区',
        disabled: false,
        id: 320111
      },
      {
        name: '栖霞区',
        disabled: false,
        id: 320113
      },
      {
        name: '雨花台区',
        disabled: false,
        id: 320114
      },
      {
        name: '江宁区',
        disabled: false,
        id: 320115
      },
      {
        name: '六合区',
        disabled: false,
        id: 320116
      },
      {
        name: '溧水区',
        disabled: false,
        id: 320117
      },
      {
        name: '高淳区',
        disabled: false,
        id: 320118
      }]
    },
    {
      name: '无锡市',
      disabled: false,
      id: 320200,
      children: [{
        name: '锡山区',
        disabled: false,
        id: 320205
      },
      {
        name: '惠山区',
        disabled: false,
        id: 320206
      },
      {
        name: '滨湖区',
        disabled: false,
        id: 320211
      },
      {
        name: '梁溪区',
        disabled: false,
        id: 320213
      },
      {
        name: '新吴区',
        disabled: false,
        id: 320214
      },
      {
        name: '江阴市',
        disabled: false,
        id: 320281
      },
      {
        name: '宜兴市',
        disabled: false,
        id: 320282
      }]
    },
    {
      name: '徐州市',
      disabled: false,
      id: 320300,
      children: [{
        name: '鼓楼区',
        disabled: false,
        id: 320302
      },
      {
        name: '云龙区',
        disabled: false,
        id: 320303
      },
      {
        name: '贾汪区',
        disabled: false,
        id: 320305
      },
      {
        name: '泉山区',
        disabled: false,
        id: 320311
      },
      {
        name: '铜山区',
        disabled: false,
        id: 320312
      },
      {
        name: '丰县',
        disabled: false,
        id: 320321
      },
      {
        name: '沛县',
        disabled: false,
        id: 320322
      },
      {
        name: '睢宁县',
        disabled: false,
        id: 320324
      },
      {
        name: '新沂市',
        disabled: false,
        id: 320381
      },
      {
        name: '邳州市',
        disabled: false,
        id: 320382
      },
      {
        name: '工业园区',
        disabled: false,
        id: 320391
      }]
    },
    {
      name: '常州市',
      disabled: false,
      id: 320400,
      children: [{
        name: '天宁区',
        disabled: false,
        id: 320402
      },
      {
        name: '钟楼区',
        disabled: false,
        id: 320404
      },
      {
        name: '新北区',
        disabled: false,
        id: 320411
      },
      {
        name: '武进区',
        disabled: false,
        id: 320412
      },
      {
        name: '金坛区',
        disabled: false,
        id: 320413
      },
      {
        name: '溧阳市',
        disabled: false,
        id: 320481
      }]
    },
    {
      name: '苏州市',
      disabled: false,
      id: 320500,
      children: [{
        name: '虎丘区',
        disabled: false,
        id: 320505
      },
      {
        name: '吴中区',
        disabled: false,
        id: 320506
      },
      {
        name: '相城区',
        disabled: false,
        id: 320507
      },
      {
        name: '姑苏区',
        disabled: false,
        id: 320508
      },
      {
        name: '吴江区',
        disabled: false,
        id: 320509
      },
      {
        name: '常熟市',
        disabled: false,
        id: 320581
      },
      {
        name: '张家港市',
        disabled: false,
        id: 320582
      },
      {
        name: '昆山市',
        disabled: false,
        id: 320583
      },
      {
        name: '太仓市',
        disabled: false,
        id: 320585
      },
      {
        name: '工业园区',
        disabled: false,
        id: 320590
      },
      {
        name: '高新区',
        disabled: false,
        id: 320591
      }]
    },
    {
      name: '南通市',
      disabled: false,
      id: 320600,
      children: [{
        name: '崇川区',
        disabled: false,
        id: 320602
      },
      {
        name: '港闸区',
        disabled: false,
        id: 320611
      },
      {
        name: '通州区',
        disabled: false,
        id: 320612
      },
      {
        name: '如东县',
        disabled: false,
        id: 320623
      },
      {
        name: '启东市',
        disabled: false,
        id: 320681
      },
      {
        name: '如皋市',
        disabled: false,
        id: 320682
      },
      {
        name: '海门市',
        disabled: false,
        id: 320684
      },
      {
        name: '海安市',
        disabled: false,
        id: 320685
      },
      {
        name: '高新区',
        disabled: false,
        id: 320691
      }]
    },
    {
      name: '连云港市',
      disabled: false,
      id: 320700,
      children: [{
        name: '连云区',
        disabled: false,
        id: 320703
      },
      {
        name: '海州区',
        disabled: false,
        id: 320706
      },
      {
        name: '赣榆区',
        disabled: false,
        id: 320707
      },
      {
        name: '东海县',
        disabled: false,
        id: 320722
      },
      {
        name: '灌云县',
        disabled: false,
        id: 320723
      },
      {
        name: '灌南县',
        disabled: false,
        id: 320724
      }]
    },
    {
      name: '淮安市',
      disabled: false,
      id: 320800,
      children: [{
        name: '淮安区',
        disabled: false,
        id: 320803
      },
      {
        name: '淮阴区',
        disabled: false,
        id: 320804
      },
      {
        name: '清江浦区',
        disabled: false,
        id: 320812
      },
      {
        name: '洪泽区',
        disabled: false,
        id: 320813
      },
      {
        name: '涟水县',
        disabled: false,
        id: 320826
      },
      {
        name: '盱眙县',
        disabled: false,
        id: 320830
      },
      {
        name: '金湖县',
        disabled: false,
        id: 320831
      },
      {
        name: '经济开发区',
        disabled: false,
        id: 320890
      }]
    },
    {
      name: '盐城市',
      disabled: false,
      id: 320900,
      children: [{
        name: '亭湖区',
        disabled: false,
        id: 320902
      },
      {
        name: '盐都区',
        disabled: false,
        id: 320903
      },
      {
        name: '大丰区',
        disabled: false,
        id: 320904
      },
      {
        name: '响水县',
        disabled: false,
        id: 320921
      },
      {
        name: '滨海县',
        disabled: false,
        id: 320922
      },
      {
        name: '阜宁县',
        disabled: false,
        id: 320923
      },
      {
        name: '射阳县',
        disabled: false,
        id: 320924
      },
      {
        name: '建湖县',
        disabled: false,
        id: 320925
      },
      {
        name: '东台市',
        disabled: false,
        id: 320981
      }]
    },
    {
      name: '扬州市',
      disabled: false,
      id: 321000,
      children: [{
        name: '广陵区',
        disabled: false,
        id: 321002
      },
      {
        name: '邗江区',
        disabled: false,
        id: 321003
      },
      {
        name: '江都区',
        disabled: false,
        id: 321012
      },
      {
        name: '宝应县',
        disabled: false,
        id: 321023
      },
      {
        name: '仪征市',
        disabled: false,
        id: 321081
      },
      {
        name: '高邮市',
        disabled: false,
        id: 321084
      },
      {
        name: '经济开发区',
        disabled: false,
        id: 321090
      }]
    },
    {
      name: '镇江市',
      disabled: false,
      id: 321100,
      children: [{
        name: '京口区',
        disabled: false,
        id: 321102
      },
      {
        name: '润州区',
        disabled: false,
        id: 321111
      },
      {
        name: '丹徒区',
        disabled: false,
        id: 321112
      },
      {
        name: '丹阳市',
        disabled: false,
        id: 321181
      },
      {
        name: '扬中市',
        disabled: false,
        id: 321182
      },
      {
        name: '句容市',
        disabled: false,
        id: 321183
      }]
    },
    {
      name: '泰州市',
      disabled: false,
      id: 321200,
      children: [{
        name: '海陵区',
        disabled: false,
        id: 321202
      },
      {
        name: '高港区',
        disabled: false,
        id: 321203
      },
      {
        name: '姜堰区',
        disabled: false,
        id: 321204
      },
      {
        name: '兴化市',
        disabled: false,
        id: 321281
      },
      {
        name: '靖江市',
        disabled: false,
        id: 321282
      },
      {
        name: '泰兴市',
        disabled: false,
        id: 321283
      }]
    },
    {
      name: '宿迁市',
      disabled: false,
      id: 321300,
      children: [{
        name: '宿城区',
        disabled: false,
        id: 321302
      },
      {
        name: '宿豫区',
        disabled: false,
        id: 321311
      },
      {
        name: '沭阳县',
        disabled: false,
        id: 321322
      },
      {
        name: '泗阳县',
        disabled: false,
        id: 321323
      },
      {
        name: '泗洪县',
        disabled: false,
        id: 321324
      }]
    }]
  },
  {
    name: '上海市',
    disabled: false,
    id: 310000,
    children: [{
      name: '上海市',
      disabled: false,
      id: 310100,
      children: [{
        name: '黄浦区',
        disabled: false,
        id: 310101
      },
      {
        name: '徐汇区',
        disabled: false,
        id: 310104
      },
      {
        name: '长宁区',
        disabled: false,
        id: 310105
      },
      {
        name: '静安区',
        disabled: false,
        id: 310106
      },
      {
        name: '普陀区',
        disabled: false,
        id: 310107
      },
      {
        name: '虹口区',
        disabled: false,
        id: 310109
      },
      {
        name: '杨浦区',
        disabled: false,
        id: 310110
      },
      {
        name: '闵行区',
        disabled: false,
        id: 310112
      },
      {
        name: '宝山区',
        disabled: false,
        id: 310113
      },
      {
        name: '嘉定区',
        disabled: false,
        id: 310114
      },
      {
        name: '浦东新区',
        disabled: false,
        id: 310115
      },
      {
        name: '金山区',
        disabled: false,
        id: 310116
      },
      {
        name: '松江区',
        disabled: false,
        id: 310117
      },
      {
        name: '青浦区',
        disabled: false,
        id: 310118
      },
      {
        name: '奉贤区',
        disabled: false,
        id: 310120
      },
      {
        name: '崇明区',
        disabled: false,
        id: 310151
      }]
    }]
  },
  {
    name: '北京市',
    disabled: false,
    id: 110000,
    children: [{
      name: '北京市',
      disabled: false,
      id: 110100,
      children: [{
        name: '东城区',
        disabled: false,
        id: 110101
      },
      {
        name: '西城区',
        disabled: false,
        id: 110102
      },
      {
        name: '朝阳区',
        disabled: false,
        id: 110105
      },
      {
        name: '丰台区',
        disabled: false,
        id: 110106
      },
      {
        name: '石景山区',
        disabled: false,
        id: 110107
      },
      {
        name: '海淀区',
        disabled: false,
        id: 110108
      },
      {
        name: '门头沟区',
        disabled: false,
        id: 110109
      },
      {
        name: '房山区',
        disabled: false,
        id: 110111
      },
      {
        name: '通州区',
        disabled: false,
        id: 110112
      },
      {
        name: '顺义区',
        disabled: false,
        id: 110113
      },
      {
        name: '昌平区',
        disabled: false,
        id: 110114
      },
      {
        name: '大兴区',
        disabled: false,
        id: 110115
      },
      {
        name: '怀柔区',
        disabled: false,
        id: 110116
      },
      {
        name: '平谷区',
        disabled: false,
        id: 110117
      },
      {
        name: '密云区',
        disabled: false,
        id: 110118
      },
      {
        name: '延庆区',
        disabled: false,
        id: 110119
      }]
    }]
  },
  {
    name: '天津市',
    disabled: false,
    id: 120000,
    children: [{
      name: '天津市',
      disabled: false,
      id: 120100,
      children: [{
        name: '和平区',
        disabled: false,
        id: 120101
      },
      {
        name: '河东区',
        disabled: false,
        id: 120102
      },
      {
        name: '河西区',
        disabled: false,
        id: 120103
      },
      {
        name: '南开区',
        disabled: false,
        id: 120104
      },
      {
        name: '河北区',
        disabled: false,
        id: 120105
      },
      {
        name: '红桥区',
        disabled: false,
        id: 120106
      },
      {
        name: '东丽区',
        disabled: false,
        id: 120110
      },
      {
        name: '西青区',
        disabled: false,
        id: 120111
      },
      {
        name: '津南区',
        disabled: false,
        id: 120112
      },
      {
        name: '北辰区',
        disabled: false,
        id: 120113
      },
      {
        name: '武清区',
        disabled: false,
        id: 120114
      },
      {
        name: '宝坻区',
        disabled: false,
        id: 120115
      },
      {
        name: '滨海新区',
        disabled: false,
        id: 120116
      },
      {
        name: '宁河区',
        disabled: false,
        id: 120117
      },
      {
        name: '静海区',
        disabled: false,
        id: 120118
      },
      {
        name: '蓟州区',
        disabled: false,
        id: 120119
      }]
    }]
  },
  {
    name: '河北省',
    disabled: false,
    id: 130000,
    children: [{
      name: '石家庄市',
      disabled: false,
      id: 130100,
      children: [{
        name: '长安区',
        disabled: false,
        id: 130102
      },
      {
        name: '桥西区',
        disabled: false,
        id: 130104
      },
      {
        name: '新华区',
        disabled: false,
        id: 130105
      },
      {
        name: '井陉矿区',
        disabled: false,
        id: 130107
      },
      {
        name: '裕华区',
        disabled: false,
        id: 130108
      },
      {
        name: '藁城区',
        disabled: false,
        id: 130109
      },
      {
        name: '鹿泉区',
        disabled: false,
        id: 130110
      },
      {
        name: '栾城区',
        disabled: false,
        id: 130111
      },
      {
        name: '井陉县',
        disabled: false,
        id: 130121
      },
      {
        name: '正定县',
        disabled: false,
        id: 130123
      },
      {
        name: '行唐县',
        disabled: false,
        id: 130125
      },
      {
        name: '灵寿县',
        disabled: false,
        id: 130126
      },
      {
        name: '高邑县',
        disabled: false,
        id: 130127
      },
      {
        name: '深泽县',
        disabled: false,
        id: 130128
      },
      {
        name: '赞皇县',
        disabled: false,
        id: 130129
      },
      {
        name: '无极县',
        disabled: false,
        id: 130130
      },
      {
        name: '平山县',
        disabled: false,
        id: 130131
      },
      {
        name: '元氏县',
        disabled: false,
        id: 130132
      },
      {
        name: '赵县',
        disabled: false,
        id: 130133
      },
      {
        name: '辛集市',
        disabled: false,
        id: 130181
      },
      {
        name: '晋州市',
        disabled: false,
        id: 130183
      },
      {
        name: '新乐市',
        disabled: false,
        id: 130184
      }]
    },
    {
      name: '唐山市',
      disabled: false,
      id: 130200,
      children: [{
        name: '路南区',
        disabled: false,
        id: 130202
      },
      {
        name: '路北区',
        disabled: false,
        id: 130203
      },
      {
        name: '古冶区',
        disabled: false,
        id: 130204
      },
      {
        name: '开平区',
        disabled: false,
        id: 130205
      },
      {
        name: '丰南区',
        disabled: false,
        id: 130207
      },
      {
        name: '丰润区',
        disabled: false,
        id: 130208
      },
      {
        name: '曹妃甸区',
        disabled: false,
        id: 130209
      },
      {
        name: '滦南县',
        disabled: false,
        id: 130224
      },
      {
        name: '乐亭县',
        disabled: false,
        id: 130225
      },
      {
        name: '迁西县',
        disabled: false,
        id: 130227
      },
      {
        name: '玉田县',
        disabled: false,
        id: 130229
      },
      {
        name: '遵化市',
        disabled: false,
        id: 130281
      },
      {
        name: '迁安市',
        disabled: false,
        id: 130283
      },
      {
        name: '滦州市',
        disabled: false,
        id: 130284
      }]
    },
    {
      name: '秦皇岛市',
      disabled: false,
      id: 130300,
      children: [{
        name: '海港区',
        disabled: false,
        id: 130302
      },
      {
        name: '山海关区',
        disabled: false,
        id: 130303
      },
      {
        name: '北戴河区',
        disabled: false,
        id: 130304
      },
      {
        name: '抚宁区',
        disabled: false,
        id: 130306
      },
      {
        name: '青龙满族自治县',
        disabled: false,
        id: 130321
      },
      {
        name: '昌黎县',
        disabled: false,
        id: 130322
      },
      {
        name: '卢龙县',
        disabled: false,
        id: 130324
      },
      {
        name: '经济技术开发区',
        disabled: false,
        id: 130390
      }]
    },
    {
      name: '邯郸市',
      disabled: false,
      id: 130400,
      children: [{
        name: '邯山区',
        disabled: false,
        id: 130402
      },
      {
        name: '丛台区',
        disabled: false,
        id: 130403
      },
      {
        name: '复兴区',
        disabled: false,
        id: 130404
      },
      {
        name: '峰峰矿区',
        disabled: false,
        id: 130406
      },
      {
        name: '肥乡区',
        disabled: false,
        id: 130407
      },
      {
        name: '永年区',
        disabled: false,
        id: 130408
      },
      {
        name: '临漳县',
        disabled: false,
        id: 130423
      },
      {
        name: '成安县',
        disabled: false,
        id: 130424
      },
      {
        name: '大名县',
        disabled: false,
        id: 130425
      },
      {
        name: '涉县',
        disabled: false,
        id: 130426
      },
      {
        name: '磁县',
        disabled: false,
        id: 130427
      },
      {
        name: '邱县',
        disabled: false,
        id: 130430
      },
      {
        name: '鸡泽县',
        disabled: false,
        id: 130431
      },
      {
        name: '广平县',
        disabled: false,
        id: 130432
      },
      {
        name: '馆陶县',
        disabled: false,
        id: 130433
      },
      {
        name: '魏县',
        disabled: false,
        id: 130434
      },
      {
        name: '曲周县',
        disabled: false,
        id: 130435
      },
      {
        name: '武安市',
        disabled: false,
        id: 130481
      }]
    },
    {
      name: '邢台市',
      disabled: false,
      id: 130500,
      children: [{
        name: '桥东区',
        disabled: false,
        id: 130502
      },
      {
        name: '桥西区',
        disabled: false,
        id: 130503
      },
      {
        name: '邢台县',
        disabled: false,
        id: 130521
      },
      {
        name: '临城县',
        disabled: false,
        id: 130522
      },
      {
        name: '内丘县',
        disabled: false,
        id: 130523
      },
      {
        name: '柏乡县',
        disabled: false,
        id: 130524
      },
      {
        name: '隆尧县',
        disabled: false,
        id: 130525
      },
      {
        name: '任县',
        disabled: false,
        id: 130526
      },
      {
        name: '南和县',
        disabled: false,
        id: 130527
      },
      {
        name: '宁晋县',
        disabled: false,
        id: 130528
      },
      {
        name: '巨鹿县',
        disabled: false,
        id: 130529
      },
      {
        name: '新河县',
        disabled: false,
        id: 130530
      },
      {
        name: '广宗县',
        disabled: false,
        id: 130531
      },
      {
        name: '平乡县',
        disabled: false,
        id: 130532
      },
      {
        name: '威县',
        disabled: false,
        id: 130533
      },
      {
        name: '清河县',
        disabled: false,
        id: 130534
      },
      {
        name: '临西县',
        disabled: false,
        id: 130535
      },
      {
        name: '南宫市',
        disabled: false,
        id: 130581
      },
      {
        name: '沙河市',
        disabled: false,
        id: 130582
      }]
    },
    {
      name: '保定市',
      disabled: false,
      id: 130600,
      children: [{
        name: '竞秀区',
        disabled: false,
        id: 130602
      },
      {
        name: '莲池区',
        disabled: false,
        id: 130606
      },
      {
        name: '满城区',
        disabled: false,
        id: 130607
      },
      {
        name: '清苑区',
        disabled: false,
        id: 130608
      },
      {
        name: '徐水区',
        disabled: false,
        id: 130609
      },
      {
        name: '涞水县',
        disabled: false,
        id: 130623
      },
      {
        name: '阜平县',
        disabled: false,
        id: 130624
      },
      {
        name: '定兴县',
        disabled: false,
        id: 130626
      },
      {
        name: '唐县',
        disabled: false,
        id: 130627
      },
      {
        name: '高阳县',
        disabled: false,
        id: 130628
      },
      {
        name: '容城县',
        disabled: false,
        id: 130629
      },
      {
        name: '涞源县',
        disabled: false,
        id: 130630
      },
      {
        name: '望都县',
        disabled: false,
        id: 130631
      },
      {
        name: '安新县',
        disabled: false,
        id: 130632
      },
      {
        name: '易县',
        disabled: false,
        id: 130633
      },
      {
        name: '曲阳县',
        disabled: false,
        id: 130634
      },
      {
        name: '蠡县',
        disabled: false,
        id: 130635
      },
      {
        name: '顺平县',
        disabled: false,
        id: 130636
      },
      {
        name: '博野县',
        disabled: false,
        id: 130637
      },
      {
        name: '雄县',
        disabled: false,
        id: 130638
      },
      {
        name: '涿州市',
        disabled: false,
        id: 130681
      },
      {
        name: '定州市',
        disabled: false,
        id: 130682
      },
      {
        name: '安国市',
        disabled: false,
        id: 130683
      },
      {
        name: '高碑店市',
        disabled: false,
        id: 130684
      }]
    },
    {
      name: '张家口市',
      disabled: false,
      id: 130700,
      children: [{
        name: '桥东区',
        disabled: false,
        id: 130702
      },
      {
        name: '桥西区',
        disabled: false,
        id: 130703
      },
      {
        name: '宣化区',
        disabled: false,
        id: 130705
      },
      {
        name: '下花园区',
        disabled: false,
        id: 130706
      },
      {
        name: '万全区',
        disabled: false,
        id: 130708
      },
      {
        name: '崇礼区',
        disabled: false,
        id: 130709
      },
      {
        name: '张北县',
        disabled: false,
        id: 130722
      },
      {
        name: '康保县',
        disabled: false,
        id: 130723
      },
      {
        name: '沽源县',
        disabled: false,
        id: 130724
      },
      {
        name: '尚义县',
        disabled: false,
        id: 130725
      },
      {
        name: '蔚县',
        disabled: false,
        id: 130726
      },
      {
        name: '阳原县',
        disabled: false,
        id: 130727
      },
      {
        name: '怀安县',
        disabled: false,
        id: 130728
      },
      {
        name: '怀来县',
        disabled: false,
        id: 130730
      },
      {
        name: '涿鹿县',
        disabled: false,
        id: 130731
      },
      {
        name: '赤城县',
        disabled: false,
        id: 130732
      }]
    },
    {
      name: '承德市',
      disabled: false,
      id: 130800,
      children: [{
        name: '双桥区',
        disabled: false,
        id: 130802
      },
      {
        name: '双滦区',
        disabled: false,
        id: 130803
      },
      {
        name: '鹰手营子矿区',
        disabled: false,
        id: 130804
      },
      {
        name: '承德县',
        disabled: false,
        id: 130821
      },
      {
        name: '兴隆县',
        disabled: false,
        id: 130822
      },
      {
        name: '滦平县',
        disabled: false,
        id: 130824
      },
      {
        name: '隆化县',
        disabled: false,
        id: 130825
      },
      {
        name: '丰宁满族自治县',
        disabled: false,
        id: 130826
      },
      {
        name: '宽城满族自治县',
        disabled: false,
        id: 130827
      },
      {
        name: '围场满族蒙古族自治县',
        disabled: false,
        id: 130828
      },
      {
        name: '平泉市',
        disabled: false,
        id: 130881
      }]
    },
    {
      name: '沧州市',
      disabled: false,
      id: 130900,
      children: [{
        name: '新华区',
        disabled: false,
        id: 130902
      },
      {
        name: '运河区',
        disabled: false,
        id: 130903
      },
      {
        name: '沧县',
        disabled: false,
        id: 130921
      },
      {
        name: '青县',
        disabled: false,
        id: 130922
      },
      {
        name: '东光县',
        disabled: false,
        id: 130923
      },
      {
        name: '海兴县',
        disabled: false,
        id: 130924
      },
      {
        name: '盐山县',
        disabled: false,
        id: 130925
      },
      {
        name: '肃宁县',
        disabled: false,
        id: 130926
      },
      {
        name: '南皮县',
        disabled: false,
        id: 130927
      },
      {
        name: '吴桥县',
        disabled: false,
        id: 130928
      },
      {
        name: '献县',
        disabled: false,
        id: 130929
      },
      {
        name: '孟村回族自治县',
        disabled: false,
        id: 130930
      },
      {
        name: '泊头市',
        disabled: false,
        id: 130981
      },
      {
        name: '任丘市',
        disabled: false,
        id: 130982
      },
      {
        name: '黄骅市',
        disabled: false,
        id: 130983
      },
      {
        name: '河间市',
        disabled: false,
        id: 130984
      }]
    },
    {
      name: '廊坊市',
      disabled: false,
      id: 131000,
      children: [{
        name: '安次区',
        disabled: false,
        id: 131002
      },
      {
        name: '广阳区',
        disabled: false,
        id: 131003
      },
      {
        name: '固安县',
        disabled: false,
        id: 131022
      },
      {
        name: '永清县',
        disabled: false,
        id: 131023
      },
      {
        name: '香河县',
        disabled: false,
        id: 131024
      },
      {
        name: '大城县',
        disabled: false,
        id: 131025
      },
      {
        name: '文安县',
        disabled: false,
        id: 131026
      },
      {
        name: '大厂回族自治县',
        disabled: false,
        id: 131028
      },
      {
        name: '霸州市',
        disabled: false,
        id: 131081
      },
      {
        name: '三河市',
        disabled: false,
        id: 131082
      },
      {
        name: '开发区',
        disabled: false,
        id: 131090
      }]
    },
    {
      name: '衡水市',
      disabled: false,
      id: 131100,
      children: [{
        name: '桃城区',
        disabled: false,
        id: 131102
      },
      {
        name: '冀州区',
        disabled: false,
        id: 131103
      },
      {
        name: '枣强县',
        disabled: false,
        id: 131121
      },
      {
        name: '武邑县',
        disabled: false,
        id: 131122
      },
      {
        name: '武强县',
        disabled: false,
        id: 131123
      },
      {
        name: '饶阳县',
        disabled: false,
        id: 131124
      },
      {
        name: '安平县',
        disabled: false,
        id: 131125
      },
      {
        name: '故城县',
        disabled: false,
        id: 131126
      },
      {
        name: '景县',
        disabled: false,
        id: 131127
      },
      {
        name: '阜城县',
        disabled: false,
        id: 131128
      },
      {
        name: '深州市',
        disabled: false,
        id: 131182
      }]
    }]
  },
  {
    name: '山西省',
    disabled: false,
    id: 140000,
    children: [{
      name: '太原市',
      disabled: false,
      id: 140100,
      children: [{
        name: '小店区',
        disabled: false,
        id: 140105
      },
      {
        name: '迎泽区',
        disabled: false,
        id: 140106
      },
      {
        name: '杏花岭区',
        disabled: false,
        id: 140107
      },
      {
        name: '尖草坪区',
        disabled: false,
        id: 140108
      },
      {
        name: '万柏林区',
        disabled: false,
        id: 140109
      },
      {
        name: '晋源区',
        disabled: false,
        id: 140110
      },
      {
        name: '清徐县',
        disabled: false,
        id: 140121
      },
      {
        name: '阳曲县',
        disabled: false,
        id: 140122
      },
      {
        name: '娄烦县',
        disabled: false,
        id: 140123
      },
      {
        name: '古交市',
        disabled: false,
        id: 140181
      }]
    },
    {
      name: '大同市',
      disabled: false,
      id: 140200,
      children: [{
        name: '新荣区',
        disabled: false,
        id: 140212
      },
      {
        name: '平城区',
        disabled: false,
        id: 140213
      },
      {
        name: '云冈区',
        disabled: false,
        id: 140214
      },
      {
        name: '云州区',
        disabled: false,
        id: 140215
      },
      {
        name: '阳高县',
        disabled: false,
        id: 140221
      },
      {
        name: '天镇县',
        disabled: false,
        id: 140222
      },
      {
        name: '广灵县',
        disabled: false,
        id: 140223
      },
      {
        name: '灵丘县',
        disabled: false,
        id: 140224
      },
      {
        name: '浑源县',
        disabled: false,
        id: 140225
      },
      {
        name: '左云县',
        disabled: false,
        id: 140226
      }]
    },
    {
      name: '阳泉市',
      disabled: false,
      id: 140300,
      children: [{
        name: '城区',
        disabled: false,
        id: 140302
      },
      {
        name: '矿区',
        disabled: false,
        id: 140303
      },
      {
        name: '郊区',
        disabled: false,
        id: 140311
      },
      {
        name: '平定县',
        disabled: false,
        id: 140321
      },
      {
        name: '盂县',
        disabled: false,
        id: 140322
      }]
    },
    {
      name: '长治市',
      disabled: false,
      id: 140400,
      children: [{
        name: '潞州区',
        disabled: false,
        id: 140403
      },
      {
        name: '上党区',
        disabled: false,
        id: 140404
      },
      {
        name: '屯留区',
        disabled: false,
        id: 140405
      },
      {
        name: '潞城区',
        disabled: false,
        id: 140406
      },
      {
        name: '襄垣县',
        disabled: false,
        id: 140423
      },
      {
        name: '平顺县',
        disabled: false,
        id: 140425
      },
      {
        name: '黎城县',
        disabled: false,
        id: 140426
      },
      {
        name: '壶关县',
        disabled: false,
        id: 140427
      },
      {
        name: '长子县',
        disabled: false,
        id: 140428
      },
      {
        name: '武乡县',
        disabled: false,
        id: 140429
      },
      {
        name: '沁县',
        disabled: false,
        id: 140430
      },
      {
        name: '沁源县',
        disabled: false,
        id: 140431
      }]
    },
    {
      name: '晋城市',
      disabled: false,
      id: 140500,
      children: [{
        name: '城区',
        disabled: false,
        id: 140502
      },
      {
        name: '沁水县',
        disabled: false,
        id: 140521
      },
      {
        name: '阳城县',
        disabled: false,
        id: 140522
      },
      {
        name: '陵川县',
        disabled: false,
        id: 140524
      },
      {
        name: '泽州县',
        disabled: false,
        id: 140525
      },
      {
        name: '高平市',
        disabled: false,
        id: 140581
      }]
    },
    {
      name: '朔州市',
      disabled: false,
      id: 140600,
      children: [{
        name: '朔城区',
        disabled: false,
        id: 140602
      },
      {
        name: '平鲁区',
        disabled: false,
        id: 140603
      },
      {
        name: '山阴县',
        disabled: false,
        id: 140621
      },
      {
        name: '应县',
        disabled: false,
        id: 140622
      },
      {
        name: '右玉县',
        disabled: false,
        id: 140623
      },
      {
        name: '怀仁市',
        disabled: false,
        id: 140681
      }]
    },
    {
      name: '晋中市',
      disabled: false,
      id: 140700,
      children: [{
        name: '榆次区',
        disabled: false,
        id: 140702
      },
      {
        name: '榆社县',
        disabled: false,
        id: 140721
      },
      {
        name: '左权县',
        disabled: false,
        id: 140722
      },
      {
        name: '和顺县',
        disabled: false,
        id: 140723
      },
      {
        name: '昔阳县',
        disabled: false,
        id: 140724
      },
      {
        name: '寿阳县',
        disabled: false,
        id: 140725
      },
      {
        name: '太谷县',
        disabled: false,
        id: 140726
      },
      {
        name: '祁县',
        disabled: false,
        id: 140727
      },
      {
        name: '平遥县',
        disabled: false,
        id: 140728
      },
      {
        name: '灵石县',
        disabled: false,
        id: 140729
      },
      {
        name: '介休市',
        disabled: false,
        id: 140781
      }]
    },
    {
      name: '运城市',
      disabled: false,
      id: 140800,
      children: [{
        name: '盐湖区',
        disabled: false,
        id: 140802
      },
      {
        name: '临猗县',
        disabled: false,
        id: 140821
      },
      {
        name: '万荣县',
        disabled: false,
        id: 140822
      },
      {
        name: '闻喜县',
        disabled: false,
        id: 140823
      },
      {
        name: '稷山县',
        disabled: false,
        id: 140824
      },
      {
        name: '新绛县',
        disabled: false,
        id: 140825
      },
      {
        name: '绛县',
        disabled: false,
        id: 140826
      },
      {
        name: '垣曲县',
        disabled: false,
        id: 140827
      },
      {
        name: '夏县',
        disabled: false,
        id: 140828
      },
      {
        name: '平陆县',
        disabled: false,
        id: 140829
      },
      {
        name: '芮城县',
        disabled: false,
        id: 140830
      },
      {
        name: '永济市',
        disabled: false,
        id: 140881
      },
      {
        name: '河津市',
        disabled: false,
        id: 140882
      }]
    },
    {
      name: '忻州市',
      disabled: false,
      id: 140900,
      children: [{
        name: '忻府区',
        disabled: false,
        id: 140902
      },
      {
        name: '定襄县',
        disabled: false,
        id: 140921
      },
      {
        name: '五台县',
        disabled: false,
        id: 140922
      },
      {
        name: '代县',
        disabled: false,
        id: 140923
      },
      {
        name: '繁峙县',
        disabled: false,
        id: 140924
      },
      {
        name: '宁武县',
        disabled: false,
        id: 140925
      },
      {
        name: '静乐县',
        disabled: false,
        id: 140926
      },
      {
        name: '神池县',
        disabled: false,
        id: 140927
      },
      {
        name: '五寨县',
        disabled: false,
        id: 140928
      },
      {
        name: '岢岚县',
        disabled: false,
        id: 140929
      },
      {
        name: '河曲县',
        disabled: false,
        id: 140930
      },
      {
        name: '保德县',
        disabled: false,
        id: 140931
      },
      {
        name: '偏关县',
        disabled: false,
        id: 140932
      },
      {
        name: '原平市',
        disabled: false,
        id: 140981
      }]
    },
    {
      name: '临汾市',
      disabled: false,
      id: 141000,
      children: [{
        name: '尧都区',
        disabled: false,
        id: 141002
      },
      {
        name: '曲沃县',
        disabled: false,
        id: 141021
      },
      {
        name: '翼城县',
        disabled: false,
        id: 141022
      },
      {
        name: '襄汾县',
        disabled: false,
        id: 141023
      },
      {
        name: '洪洞县',
        disabled: false,
        id: 141024
      },
      {
        name: '古县',
        disabled: false,
        id: 141025
      },
      {
        name: '安泽县',
        disabled: false,
        id: 141026
      },
      {
        name: '浮山县',
        disabled: false,
        id: 141027
      },
      {
        name: '吉县',
        disabled: false,
        id: 141028
      },
      {
        name: '乡宁县',
        disabled: false,
        id: 141029
      },
      {
        name: '大宁县',
        disabled: false,
        id: 141030
      },
      {
        name: '隰县',
        disabled: false,
        id: 141031
      },
      {
        name: '永和县',
        disabled: false,
        id: 141032
      },
      {
        name: '蒲县',
        disabled: false,
        id: 141033
      },
      {
        name: '汾西县',
        disabled: false,
        id: 141034
      },
      {
        name: '侯马市',
        disabled: false,
        id: 141081
      },
      {
        name: '霍州市',
        disabled: false,
        id: 141082
      }]
    },
    {
      name: '吕梁市',
      disabled: false,
      id: 141100,
      children: [{
        name: '离石区',
        disabled: false,
        id: 141102
      },
      {
        name: '文水县',
        disabled: false,
        id: 141121
      },
      {
        name: '交城县',
        disabled: false,
        id: 141122
      },
      {
        name: '兴县',
        disabled: false,
        id: 141123
      },
      {
        name: '临县',
        disabled: false,
        id: 141124
      },
      {
        name: '柳林县',
        disabled: false,
        id: 141125
      },
      {
        name: '石楼县',
        disabled: false,
        id: 141126
      },
      {
        name: '岚县',
        disabled: false,
        id: 141127
      },
      {
        name: '方山县',
        disabled: false,
        id: 141128
      },
      {
        name: '中阳县',
        disabled: false,
        id: 141129
      },
      {
        name: '交口县',
        disabled: false,
        id: 141130
      },
      {
        name: '孝义市',
        disabled: false,
        id: 141181
      },
      {
        name: '汾阳市',
        disabled: false,
        id: 141182
      }]
    }]
  },
  {
    name: '辽宁省',
    disabled: false,
    id: 210000,
    children: [{
      name: '沈阳市',
      disabled: false,
      id: 210100,
      children: [{
        name: '和平区',
        disabled: false,
        id: 210102
      },
      {
        name: '沈河区',
        disabled: false,
        id: 210103
      },
      {
        name: '大东区',
        disabled: false,
        id: 210104
      },
      {
        name: '皇姑区',
        disabled: false,
        id: 210105
      },
      {
        name: '铁西区',
        disabled: false,
        id: 210106
      },
      {
        name: '苏家屯区',
        disabled: false,
        id: 210111
      },
      {
        name: '浑南区',
        disabled: false,
        id: 210112
      },
      {
        name: '沈北新区',
        disabled: false,
        id: 210113
      },
      {
        name: '于洪区',
        disabled: false,
        id: 210114
      },
      {
        name: '辽中区',
        disabled: false,
        id: 210115
      },
      {
        name: '康平县',
        disabled: false,
        id: 210123
      },
      {
        name: '法库县',
        disabled: false,
        id: 210124
      },
      {
        name: '新民市',
        disabled: false,
        id: 210181
      },
      {
        name: '经济技术开发区',
        disabled: false,
        id: 210190
      }]
    },
    {
      name: '大连市',
      disabled: false,
      id: 210200,
      children: [{
        name: '中山区',
        disabled: false,
        id: 210202
      },
      {
        name: '西岗区',
        disabled: false,
        id: 210203
      },
      {
        name: '沙河口区',
        disabled: false,
        id: 210204
      },
      {
        name: '甘井子区',
        disabled: false,
        id: 210211
      },
      {
        name: '旅顺口区',
        disabled: false,
        id: 210212
      },
      {
        name: '金州区',
        disabled: false,
        id: 210213
      },
      {
        name: '普兰店区',
        disabled: false,
        id: 210214
      },
      {
        name: '长海县',
        disabled: false,
        id: 210224
      },
      {
        name: '瓦房店市',
        disabled: false,
        id: 210281
      },
      {
        name: '庄河市',
        disabled: false,
        id: 210283
      }]
    },
    {
      name: '鞍山市',
      disabled: false,
      id: 210300,
      children: [{
        name: '铁东区',
        disabled: false,
        id: 210302
      },
      {
        name: '铁西区',
        disabled: false,
        id: 210303
      },
      {
        name: '立山区',
        disabled: false,
        id: 210304
      },
      {
        name: '千山区',
        disabled: false,
        id: 210311
      },
      {
        name: '台安县',
        disabled: false,
        id: 210321
      },
      {
        name: '岫岩满族自治县',
        disabled: false,
        id: 210323
      },
      {
        name: '海城市',
        disabled: false,
        id: 210381
      },
      {
        name: '高新区',
        disabled: false,
        id: 210390
      }]
    },
    {
      name: '抚顺市',
      disabled: false,
      id: 210400,
      children: [{
        name: '新抚区',
        disabled: false,
        id: 210402
      },
      {
        name: '东洲区',
        disabled: false,
        id: 210403
      },
      {
        name: '望花区',
        disabled: false,
        id: 210404
      },
      {
        name: '顺城区',
        disabled: false,
        id: 210411
      },
      {
        name: '抚顺县',
        disabled: false,
        id: 210421
      },
      {
        name: '新宾满族自治县',
        disabled: false,
        id: 210422
      },
      {
        name: '清原满族自治县',
        disabled: false,
        id: 210423
      }]
    },
    {
      name: '本溪市',
      disabled: false,
      id: 210500,
      children: [{
        name: '平山区',
        disabled: false,
        id: 210502
      },
      {
        name: '溪湖区',
        disabled: false,
        id: 210503
      },
      {
        name: '明山区',
        disabled: false,
        id: 210504
      },
      {
        name: '南芬区',
        disabled: false,
        id: 210505
      },
      {
        name: '本溪满族自治县',
        disabled: false,
        id: 210521
      },
      {
        name: '桓仁满族自治县',
        disabled: false,
        id: 210522
      }]
    },
    {
      name: '丹东市',
      disabled: false,
      id: 210600,
      children: [{
        name: '元宝区',
        disabled: false,
        id: 210602
      },
      {
        name: '振兴区',
        disabled: false,
        id: 210603
      },
      {
        name: '振安区',
        disabled: false,
        id: 210604
      },
      {
        name: '宽甸满族自治县',
        disabled: false,
        id: 210624
      },
      {
        name: '东港市',
        disabled: false,
        id: 210681
      },
      {
        name: '凤城市',
        disabled: false,
        id: 210682
      }]
    },
    {
      name: '锦州市',
      disabled: false,
      id: 210700,
      children: [{
        name: '古塔区',
        disabled: false,
        id: 210702
      },
      {
        name: '凌河区',
        disabled: false,
        id: 210703
      },
      {
        name: '太和区',
        disabled: false,
        id: 210711
      },
      {
        name: '黑山县',
        disabled: false,
        id: 210726
      },
      {
        name: '义县',
        disabled: false,
        id: 210727
      },
      {
        name: '凌海市',
        disabled: false,
        id: 210781
      },
      {
        name: '北镇市',
        disabled: false,
        id: 210782
      },
      {
        name: '经济技术开发区',
        disabled: false,
        id: 210793
      }]
    },
    {
      name: '营口市',
      disabled: false,
      id: 210800,
      children: [{
        name: '站前区',
        disabled: false,
        id: 210802
      },
      {
        name: '西市区',
        disabled: false,
        id: 210803
      },
      {
        name: '鲅鱼圈区',
        disabled: false,
        id: 210804
      },
      {
        name: '老边区',
        disabled: false,
        id: 210811
      },
      {
        name: '盖州市',
        disabled: false,
        id: 210881
      },
      {
        name: '大石桥市',
        disabled: false,
        id: 210882
      }]
    },
    {
      name: '阜新市',
      disabled: false,
      id: 210900,
      children: [{
        name: '海州区',
        disabled: false,
        id: 210902
      },
      {
        name: '新邱区',
        disabled: false,
        id: 210903
      },
      {
        name: '太平区',
        disabled: false,
        id: 210904
      },
      {
        name: '清河门区',
        disabled: false,
        id: 210905
      },
      {
        name: '细河区',
        disabled: false,
        id: 210911
      },
      {
        name: '阜新蒙古族自治县',
        disabled: false,
        id: 210921
      },
      {
        name: '彰武县',
        disabled: false,
        id: 210922
      }]
    },
    {
      name: '辽阳市',
      disabled: false,
      id: 211000,
      children: [{
        name: '白塔区',
        disabled: false,
        id: 211002
      },
      {
        name: '文圣区',
        disabled: false,
        id: 211003
      },
      {
        name: '宏伟区',
        disabled: false,
        id: 211004
      },
      {
        name: '弓长岭区',
        disabled: false,
        id: 211005
      },
      {
        name: '太子河区',
        disabled: false,
        id: 211011
      },
      {
        name: '辽阳县',
        disabled: false,
        id: 211021
      },
      {
        name: '灯塔市',
        disabled: false,
        id: 211081
      }]
    },
    {
      name: '盘锦市',
      disabled: false,
      id: 211100,
      children: [{
        name: '双台子区',
        disabled: false,
        id: 211102
      },
      {
        name: '兴隆台区',
        disabled: false,
        id: 211103
      },
      {
        name: '大洼区',
        disabled: false,
        id: 211104
      },
      {
        name: '盘山县',
        disabled: false,
        id: 211122
      }]
    },
    {
      name: '铁岭市',
      disabled: false,
      id: 211200,
      children: [{
        name: '银州区',
        disabled: false,
        id: 211202
      },
      {
        name: '清河区',
        disabled: false,
        id: 211204
      },
      {
        name: '铁岭县',
        disabled: false,
        id: 211221
      },
      {
        name: '西丰县',
        disabled: false,
        id: 211223
      },
      {
        name: '昌图县',
        disabled: false,
        id: 211224
      },
      {
        name: '调兵山市',
        disabled: false,
        id: 211281
      },
      {
        name: '开原市',
        disabled: false,
        id: 211282
      }]
    },
    {
      name: '朝阳市',
      disabled: false,
      id: 211300,
      children: [{
        name: '双塔区',
        disabled: false,
        id: 211302
      },
      {
        name: '龙城区',
        disabled: false,
        id: 211303
      },
      {
        name: '朝阳县',
        disabled: false,
        id: 211321
      },
      {
        name: '建平县',
        disabled: false,
        id: 211322
      },
      {
        name: '喀喇沁左翼蒙古族自治县',
        disabled: false,
        id: 211324
      },
      {
        name: '北票市',
        disabled: false,
        id: 211381
      },
      {
        name: '凌源市',
        disabled: false,
        id: 211382
      }]
    },
    {
      name: '葫芦岛市',
      disabled: false,
      id: 211400,
      children: [{
        name: '连山区',
        disabled: false,
        id: 211402
      },
      {
        name: '龙港区',
        disabled: false,
        id: 211403
      },
      {
        name: '南票区',
        disabled: false,
        id: 211404
      },
      {
        name: '绥中县',
        disabled: false,
        id: 211421
      },
      {
        name: '建昌县',
        disabled: false,
        id: 211422
      },
      {
        name: '兴城市',
        disabled: false,
        id: 211481
      }]
    }]
  },
  {
    name: '吉林省',
    disabled: false,
    id: 220000,
    children: [{
      name: '长春市',
      disabled: false,
      id: 220100,
      children: [{
        name: '南关区',
        disabled: false,
        id: 220102
      },
      {
        name: '宽城区',
        disabled: false,
        id: 220103
      },
      {
        name: '朝阳区',
        disabled: false,
        id: 220104
      },
      {
        name: '二道区',
        disabled: false,
        id: 220105
      },
      {
        name: '绿园区',
        disabled: false,
        id: 220106
      },
      {
        name: '双阳区',
        disabled: false,
        id: 220112
      },
      {
        name: '九台区',
        disabled: false,
        id: 220113
      },
      {
        name: '农安县',
        disabled: false,
        id: 220122
      },
      {
        name: '榆树市',
        disabled: false,
        id: 220182
      },
      {
        name: '德惠市',
        disabled: false,
        id: 220183
      },
      {
        name: '经济技术开发区',
        disabled: false,
        id: 220192
      }]
    },
    {
      name: '吉林市',
      disabled: false,
      id: 220200,
      children: [{
        name: '昌邑区',
        disabled: false,
        id: 220202
      },
      {
        name: '龙潭区',
        disabled: false,
        id: 220203
      },
      {
        name: '船营区',
        disabled: false,
        id: 220204
      },
      {
        name: '丰满区',
        disabled: false,
        id: 220211
      },
      {
        name: '永吉县',
        disabled: false,
        id: 220221
      },
      {
        name: '蛟河市',
        disabled: false,
        id: 220281
      },
      {
        name: '桦甸市',
        disabled: false,
        id: 220282
      },
      {
        name: '舒兰市',
        disabled: false,
        id: 220283
      },
      {
        name: '磐石市',
        disabled: false,
        id: 220284
      }]
    },
    {
      name: '四平市',
      disabled: false,
      id: 220300,
      children: [{
        name: '铁西区',
        disabled: false,
        id: 220302
      },
      {
        name: '铁东区',
        disabled: false,
        id: 220303
      },
      {
        name: '梨树县',
        disabled: false,
        id: 220322
      },
      {
        name: '伊通满族自治县',
        disabled: false,
        id: 220323
      },
      {
        name: '公主岭市',
        disabled: false,
        id: 220381
      },
      {
        name: '双辽市',
        disabled: false,
        id: 220382
      }]
    },
    {
      name: '辽源市',
      disabled: false,
      id: 220400,
      children: [{
        name: '龙山区',
        disabled: false,
        id: 220402
      },
      {
        name: '西安区',
        disabled: false,
        id: 220403
      },
      {
        name: '东丰县',
        disabled: false,
        id: 220421
      },
      {
        name: '东辽县',
        disabled: false,
        id: 220422
      }]
    },
    {
      name: '通化市',
      disabled: false,
      id: 220500,
      children: [{
        name: '东昌区',
        disabled: false,
        id: 220502
      },
      {
        name: '二道江区',
        disabled: false,
        id: 220503
      },
      {
        name: '通化县',
        disabled: false,
        id: 220521
      },
      {
        name: '辉南县',
        disabled: false,
        id: 220523
      },
      {
        name: '柳河县',
        disabled: false,
        id: 220524
      },
      {
        name: '梅河口市',
        disabled: false,
        id: 220581
      },
      {
        name: '集安市',
        disabled: false,
        id: 220582
      }]
    },
    {
      name: '白山市',
      disabled: false,
      id: 220600,
      children: [{
        name: '浑江区',
        disabled: false,
        id: 220602
      },
      {
        name: '江源区',
        disabled: false,
        id: 220605
      },
      {
        name: '抚松县',
        disabled: false,
        id: 220621
      },
      {
        name: '靖宇县',
        disabled: false,
        id: 220622
      },
      {
        name: '长白朝鲜族自治县',
        disabled: false,
        id: 220623
      },
      {
        name: '临江市',
        disabled: false,
        id: 220681
      }]
    },
    {
      name: '松原市',
      disabled: false,
      id: 220700,
      children: [{
        name: '宁江区',
        disabled: false,
        id: 220702
      },
      {
        name: '前郭尔罗斯蒙古族自治县',
        disabled: false,
        id: 220721
      },
      {
        name: '长岭县',
        disabled: false,
        id: 220722
      },
      {
        name: '乾安县',
        disabled: false,
        id: 220723
      },
      {
        name: '扶余市',
        disabled: false,
        id: 220781
      }]
    },
    {
      name: '白城市',
      disabled: false,
      id: 220800,
      children: [{
        name: '洮北区',
        disabled: false,
        id: 220802
      },
      {
        name: '镇赉县',
        disabled: false,
        id: 220821
      },
      {
        name: '通榆县',
        disabled: false,
        id: 220822
      },
      {
        name: '洮南市',
        disabled: false,
        id: 220881
      },
      {
        name: '大安市',
        disabled: false,
        id: 220882
      }]
    },
    {
      name: '延边朝鲜族自治州',
      disabled: false,
      id: 222400,
      children: [{
        name: '延吉市',
        disabled: false,
        id: 222401
      },
      {
        name: '图们市',
        disabled: false,
        id: 222402
      },
      {
        name: '敦化市',
        disabled: false,
        id: 222403
      },
      {
        name: '珲春市',
        disabled: false,
        id: 222404
      },
      {
        name: '龙井市',
        disabled: false,
        id: 222405
      },
      {
        name: '和龙市',
        disabled: false,
        id: 222406
      },
      {
        name: '汪清县',
        disabled: false,
        id: 222424
      },
      {
        name: '安图县',
        disabled: false,
        id: 222426
      }]
    }]
  },
  {
    name: '黑龙江省',
    disabled: false,
    id: 230000,
    children: [{
      name: '哈尔滨市',
      disabled: false,
      id: 230100,
      children: [{
        name: '道里区',
        disabled: false,
        id: 230102
      },
      {
        name: '南岗区',
        disabled: false,
        id: 230103
      },
      {
        name: '道外区',
        disabled: false,
        id: 230104
      },
      {
        name: '平房区',
        disabled: false,
        id: 230108
      },
      {
        name: '松北区',
        disabled: false,
        id: 230109
      },
      {
        name: '香坊区',
        disabled: false,
        id: 230110
      },
      {
        name: '呼兰区',
        disabled: false,
        id: 230111
      },
      {
        name: '阿城区',
        disabled: false,
        id: 230112
      },
      {
        name: '双城区',
        disabled: false,
        id: 230113
      },
      {
        name: '依兰县',
        disabled: false,
        id: 230123
      },
      {
        name: '方正县',
        disabled: false,
        id: 230124
      },
      {
        name: '宾县',
        disabled: false,
        id: 230125
      },
      {
        name: '巴彦县',
        disabled: false,
        id: 230126
      },
      {
        name: '木兰县',
        disabled: false,
        id: 230127
      },
      {
        name: '通河县',
        disabled: false,
        id: 230128
      },
      {
        name: '延寿县',
        disabled: false,
        id: 230129
      },
      {
        name: '尚志市',
        disabled: false,
        id: 230183
      },
      {
        name: '五常市',
        disabled: false,
        id: 230184
      }]
    },
    {
      name: '齐齐哈尔市',
      disabled: false,
      id: 230200,
      children: [{
        name: '龙沙区',
        disabled: false,
        id: 230202
      },
      {
        name: '建华区',
        disabled: false,
        id: 230203
      },
      {
        name: '铁锋区',
        disabled: false,
        id: 230204
      },
      {
        name: '昂昂溪区',
        disabled: false,
        id: 230205
      },
      {
        name: '富拉尔基区',
        disabled: false,
        id: 230206
      },
      {
        name: '碾子山区',
        disabled: false,
        id: 230207
      },
      {
        name: '梅里斯达斡尔族区',
        disabled: false,
        id: 230208
      },
      {
        name: '龙江县',
        disabled: false,
        id: 230221
      },
      {
        name: '依安县',
        disabled: false,
        id: 230223
      },
      {
        name: '泰来县',
        disabled: false,
        id: 230224
      },
      {
        name: '甘南县',
        disabled: false,
        id: 230225
      },
      {
        name: '富裕县',
        disabled: false,
        id: 230227
      },
      {
        name: '克山县',
        disabled: false,
        id: 230229
      },
      {
        name: '克东县',
        disabled: false,
        id: 230230
      },
      {
        name: '拜泉县',
        disabled: false,
        id: 230231
      },
      {
        name: '讷河市',
        disabled: false,
        id: 230281
      }]
    },
    {
      name: '鸡西市',
      disabled: false,
      id: 230300,
      children: [{
        name: '鸡冠区',
        disabled: false,
        id: 230302
      },
      {
        name: '恒山区',
        disabled: false,
        id: 230303
      },
      {
        name: '滴道区',
        disabled: false,
        id: 230304
      },
      {
        name: '梨树区',
        disabled: false,
        id: 230305
      },
      {
        name: '城子河区',
        disabled: false,
        id: 230306
      },
      {
        name: '麻山区',
        disabled: false,
        id: 230307
      },
      {
        name: '鸡东县',
        disabled: false,
        id: 230321
      },
      {
        name: '虎林市',
        disabled: false,
        id: 230381
      },
      {
        name: '密山市',
        disabled: false,
        id: 230382
      }]
    },
    {
      name: '鹤岗市',
      disabled: false,
      id: 230400,
      children: [{
        name: '向阳区',
        disabled: false,
        id: 230402
      },
      {
        name: '工农区',
        disabled: false,
        id: 230403
      },
      {
        name: '南山区',
        disabled: false,
        id: 230404
      },
      {
        name: '兴安区',
        disabled: false,
        id: 230405
      },
      {
        name: '东山区',
        disabled: false,
        id: 230406
      },
      {
        name: '兴山区',
        disabled: false,
        id: 230407
      },
      {
        name: '萝北县',
        disabled: false,
        id: 230421
      },
      {
        name: '绥滨县',
        disabled: false,
        id: 230422
      }]
    },
    {
      name: '双鸭山市',
      disabled: false,
      id: 230500,
      children: [{
        name: '尖山区',
        disabled: false,
        id: 230502
      },
      {
        name: '岭东区',
        disabled: false,
        id: 230503
      },
      {
        name: '四方台区',
        disabled: false,
        id: 230505
      },
      {
        name: '宝山区',
        disabled: false,
        id: 230506
      },
      {
        name: '集贤县',
        disabled: false,
        id: 230521
      },
      {
        name: '友谊县',
        disabled: false,
        id: 230522
      },
      {
        name: '宝清县',
        disabled: false,
        id: 230523
      },
      {
        name: '饶河县',
        disabled: false,
        id: 230524
      }]
    },
    {
      name: '大庆市',
      disabled: false,
      id: 230600,
      children: [{
        name: '萨尔图区',
        disabled: false,
        id: 230602
      },
      {
        name: '龙凤区',
        disabled: false,
        id: 230603
      },
      {
        name: '让胡路区',
        disabled: false,
        id: 230604
      },
      {
        name: '红岗区',
        disabled: false,
        id: 230605
      },
      {
        name: '大同区',
        disabled: false,
        id: 230606
      },
      {
        name: '肇州县',
        disabled: false,
        id: 230621
      },
      {
        name: '肇源县',
        disabled: false,
        id: 230622
      },
      {
        name: '林甸县',
        disabled: false,
        id: 230623
      },
      {
        name: '杜尔伯特蒙古族自治县',
        disabled: false,
        id: 230624
      }]
    },
    {
      name: '伊春市',
      disabled: false,
      id: 230700,
      children: [{
        name: '伊春区',
        disabled: false,
        id: 230702
      },
      {
        name: '南岔区',
        disabled: false,
        id: 230703
      },
      {
        name: '友好区',
        disabled: false,
        id: 230704
      },
      {
        name: '西林区',
        disabled: false,
        id: 230705
      },
      {
        name: '翠峦区',
        disabled: false,
        id: 230706
      },
      {
        name: '新青区',
        disabled: false,
        id: 230707
      },
      {
        name: '美溪区',
        disabled: false,
        id: 230708
      },
      {
        name: '金山屯区',
        disabled: false,
        id: 230709
      },
      {
        name: '五营区',
        disabled: false,
        id: 230710
      },
      {
        name: '乌马河区',
        disabled: false,
        id: 230711
      },
      {
        name: '汤旺河区',
        disabled: false,
        id: 230712
      },
      {
        name: '带岭区',
        disabled: false,
        id: 230713
      },
      {
        name: '乌伊岭区',
        disabled: false,
        id: 230714
      },
      {
        name: '红星区',
        disabled: false,
        id: 230715
      },
      {
        name: '上甘岭区',
        disabled: false,
        id: 230716
      },
      {
        name: '嘉荫县',
        disabled: false,
        id: 230722
      },
      {
        name: '铁力市',
        disabled: false,
        id: 230781
      }]
    },
    {
      name: '佳木斯市',
      disabled: false,
      id: 230800,
      children: [{
        name: '向阳区',
        disabled: false,
        id: 230803
      },
      {
        name: '前进区',
        disabled: false,
        id: 230804
      },
      {
        name: '东风区',
        disabled: false,
        id: 230805
      },
      {
        name: '郊区',
        disabled: false,
        id: 230811
      },
      {
        name: '桦南县',
        disabled: false,
        id: 230822
      },
      {
        name: '桦川县',
        disabled: false,
        id: 230826
      },
      {
        name: '汤原县',
        disabled: false,
        id: 230828
      },
      {
        name: '同江市',
        disabled: false,
        id: 230881
      },
      {
        name: '富锦市',
        disabled: false,
        id: 230882
      },
      {
        name: '抚远市',
        disabled: false,
        id: 230883
      }]
    },
    {
      name: '七台河市',
      disabled: false,
      id: 230900,
      children: [{
        name: '新兴区',
        disabled: false,
        id: 230902
      },
      {
        name: '桃山区',
        disabled: false,
        id: 230903
      },
      {
        name: '茄子河区',
        disabled: false,
        id: 230904
      },
      {
        name: '勃利县',
        disabled: false,
        id: 230921
      }]
    },
    {
      name: '牡丹江市',
      disabled: false,
      id: 231000,
      children: [{
        name: '东安区',
        disabled: false,
        id: 231002
      },
      {
        name: '阳明区',
        disabled: false,
        id: 231003
      },
      {
        name: '爱民区',
        disabled: false,
        id: 231004
      },
      {
        name: '西安区',
        disabled: false,
        id: 231005
      },
      {
        name: '林口县',
        disabled: false,
        id: 231025
      },
      {
        name: '绥芬河市',
        disabled: false,
        id: 231081
      },
      {
        name: '海林市',
        disabled: false,
        id: 231083
      },
      {
        name: '宁安市',
        disabled: false,
        id: 231084
      },
      {
        name: '穆棱市',
        disabled: false,
        id: 231085
      },
      {
        name: '东宁市',
        disabled: false,
        id: 231086
      }]
    },
    {
      name: '黑河市',
      disabled: false,
      id: 231100,
      children: [{
        name: '爱辉区',
        disabled: false,
        id: 231102
      },
      {
        name: '嫩江县',
        disabled: false,
        id: 231121
      },
      {
        name: '逊克县',
        disabled: false,
        id: 231123
      },
      {
        name: '孙吴县',
        disabled: false,
        id: 231124
      },
      {
        name: '北安市',
        disabled: false,
        id: 231181
      },
      {
        name: '五大连池市',
        disabled: false,
        id: 231182
      }]
    },
    {
      name: '绥化市',
      disabled: false,
      id: 231200,
      children: [{
        name: '北林区',
        disabled: false,
        id: 231202
      },
      {
        name: '望奎县',
        disabled: false,
        id: 231221
      },
      {
        name: '兰西县',
        disabled: false,
        id: 231222
      },
      {
        name: '青冈县',
        disabled: false,
        id: 231223
      },
      {
        name: '庆安县',
        disabled: false,
        id: 231224
      },
      {
        name: '明水县',
        disabled: false,
        id: 231225
      },
      {
        name: '绥棱县',
        disabled: false,
        id: 231226
      },
      {
        name: '安达市',
        disabled: false,
        id: 231281
      },
      {
        name: '肇东市',
        disabled: false,
        id: 231282
      },
      {
        name: '海伦市',
        disabled: false,
        id: 231283
      }]
    },
    {
      name: '大兴安岭地区',
      disabled: false,
      id: 232700,
      children: [{
        name: '漠河市',
        disabled: false,
        id: 232701
      },
      {
        name: '呼玛县',
        disabled: false,
        id: 232721
      },
      {
        name: '塔河县',
        disabled: false,
        id: 232722
      },
      {
        name: '松岭区',
        disabled: false,
        id: 232790
      },
      {
        name: '呼中区',
        disabled: false,
        id: 232791
      },
      {
        name: '加格达奇区',
        disabled: false,
        id: 232792
      },
      {
        name: '新林区',
        disabled: false,
        id: 232793
      }]
    }]
  },
  {
    name: '安徽省',
    disabled: false,
    id: 340000,
    children: [{
      name: '合肥市',
      disabled: false,
      id: 340100,
      children: [{
        name: '瑶海区',
        disabled: false,
        id: 340102
      },
      {
        name: '庐阳区',
        disabled: false,
        id: 340103
      },
      {
        name: '蜀山区',
        disabled: false,
        id: 340104
      },
      {
        name: '包河区',
        disabled: false,
        id: 340111
      },
      {
        name: '长丰县',
        disabled: false,
        id: 340121
      },
      {
        name: '肥东县',
        disabled: false,
        id: 340122
      },
      {
        name: '肥西县',
        disabled: false,
        id: 340123
      },
      {
        name: '庐江县',
        disabled: false,
        id: 340124
      },
      {
        name: '巢湖市',
        disabled: false,
        id: 340181
      },
      {
        name: '高新技术开发区',
        disabled: false,
        id: 340190
      },
      {
        name: '经济技术开发区',
        disabled: false,
        id: 340191
      }]
    },
    {
      name: '芜湖市',
      disabled: false,
      id: 340200,
      children: [{
        name: '镜湖区',
        disabled: false,
        id: 340202
      },
      {
        name: '弋江区',
        disabled: false,
        id: 340203
      },
      {
        name: '鸠江区',
        disabled: false,
        id: 340207
      },
      {
        name: '三山区',
        disabled: false,
        id: 340208
      },
      {
        name: '芜湖县',
        disabled: false,
        id: 340221
      },
      {
        name: '繁昌县',
        disabled: false,
        id: 340222
      },
      {
        name: '南陵县',
        disabled: false,
        id: 340223
      },
      {
        name: '无为县',
        disabled: false,
        id: 340225
      }]
    },
    {
      name: '蚌埠市',
      disabled: false,
      id: 340300,
      children: [{
        name: '龙子湖区',
        disabled: false,
        id: 340302
      },
      {
        name: '蚌山区',
        disabled: false,
        id: 340303
      },
      {
        name: '禹会区',
        disabled: false,
        id: 340304
      },
      {
        name: '淮上区',
        disabled: false,
        id: 340311
      },
      {
        name: '怀远县',
        disabled: false,
        id: 340321
      },
      {
        name: '五河县',
        disabled: false,
        id: 340322
      },
      {
        name: '固镇县',
        disabled: false,
        id: 340323
      }]
    },
    {
      name: '淮南市',
      disabled: false,
      id: 340400,
      children: [{
        name: '大通区',
        disabled: false,
        id: 340402
      },
      {
        name: '田家庵区',
        disabled: false,
        id: 340403
      },
      {
        name: '谢家集区',
        disabled: false,
        id: 340404
      },
      {
        name: '八公山区',
        disabled: false,
        id: 340405
      },
      {
        name: '潘集区',
        disabled: false,
        id: 340406
      },
      {
        name: '凤台县',
        disabled: false,
        id: 340421
      },
      {
        name: '寿县',
        disabled: false,
        id: 340422
      }]
    },
    {
      name: '马鞍山市',
      disabled: false,
      id: 340500,
      children: [{
        name: '花山区',
        disabled: false,
        id: 340503
      },
      {
        name: '雨山区',
        disabled: false,
        id: 340504
      },
      {
        name: '博望区',
        disabled: false,
        id: 340506
      },
      {
        name: '当涂县',
        disabled: false,
        id: 340521
      },
      {
        name: '含山县',
        disabled: false,
        id: 340522
      },
      {
        name: '和县',
        disabled: false,
        id: 340523
      }]
    },
    {
      name: '淮北市',
      disabled: false,
      id: 340600,
      children: [{
        name: '杜集区',
        disabled: false,
        id: 340602
      },
      {
        name: '相山区',
        disabled: false,
        id: 340603
      },
      {
        name: '烈山区',
        disabled: false,
        id: 340604
      },
      {
        name: '濉溪县',
        disabled: false,
        id: 340621
      }]
    },
    {
      name: '铜陵市',
      disabled: false,
      id: 340700,
      children: [{
        name: '铜官区',
        disabled: false,
        id: 340705
      },
      {
        name: '义安区',
        disabled: false,
        id: 340706
      },
      {
        name: '郊区',
        disabled: false,
        id: 340711
      },
      {
        name: '枞阳县',
        disabled: false,
        id: 340722
      }]
    },
    {
      name: '安庆市',
      disabled: false,
      id: 340800,
      children: [{
        name: '迎江区',
        disabled: false,
        id: 340802
      },
      {
        name: '大观区',
        disabled: false,
        id: 340803
      },
      {
        name: '宜秀区',
        disabled: false,
        id: 340811
      },
      {
        name: '怀宁县',
        disabled: false,
        id: 340822
      },
      {
        name: '潜山县',
        disabled: false,
        id: 340824
      },
      {
        name: '太湖县',
        disabled: false,
        id: 340825
      },
      {
        name: '宿松县',
        disabled: false,
        id: 340826
      },
      {
        name: '望江县',
        disabled: false,
        id: 340827
      },
      {
        name: '岳西县',
        disabled: false,
        id: 340828
      },
      {
        name: '桐城市',
        disabled: false,
        id: 340881
      }]
    },
    {
      name: '黄山市',
      disabled: false,
      id: 341000,
      children: [{
        name: '屯溪区',
        disabled: false,
        id: 341002
      },
      {
        name: '黄山区',
        disabled: false,
        id: 341003
      },
      {
        name: '徽州区',
        disabled: false,
        id: 341004
      },
      {
        name: '歙县',
        disabled: false,
        id: 341021
      },
      {
        name: '休宁县',
        disabled: false,
        id: 341022
      },
      {
        name: '黟县',
        disabled: false,
        id: 341023
      },
      {
        name: '祁门县',
        disabled: false,
        id: 341024
      }]
    },
    {
      name: '滁州市',
      disabled: false,
      id: 341100,
      children: [{
        name: '琅琊区',
        disabled: false,
        id: 341102
      },
      {
        name: '南谯区',
        disabled: false,
        id: 341103
      },
      {
        name: '来安县',
        disabled: false,
        id: 341122
      },
      {
        name: '全椒县',
        disabled: false,
        id: 341124
      },
      {
        name: '定远县',
        disabled: false,
        id: 341125
      },
      {
        name: '凤阳县',
        disabled: false,
        id: 341126
      },
      {
        name: '天长市',
        disabled: false,
        id: 341181
      },
      {
        name: '明光市',
        disabled: false,
        id: 341182
      }]
    },
    {
      name: '阜阳市',
      disabled: false,
      id: 341200,
      children: [{
        name: '颍州区',
        disabled: false,
        id: 341202
      },
      {
        name: '颍东区',
        disabled: false,
        id: 341203
      },
      {
        name: '颍泉区',
        disabled: false,
        id: 341204
      },
      {
        name: '临泉县',
        disabled: false,
        id: 341221
      },
      {
        name: '太和县',
        disabled: false,
        id: 341222
      },
      {
        name: '阜南县',
        disabled: false,
        id: 341225
      },
      {
        name: '颍上县',
        disabled: false,
        id: 341226
      },
      {
        name: '界首市',
        disabled: false,
        id: 341282
      }]
    },
    {
      name: '宿州市',
      disabled: false,
      id: 341300,
      children: [{
        name: '埇桥区',
        disabled: false,
        id: 341302
      },
      {
        name: '砀山县',
        disabled: false,
        id: 341321
      },
      {
        name: '萧县',
        disabled: false,
        id: 341322
      },
      {
        name: '灵璧县',
        disabled: false,
        id: 341323
      },
      {
        name: '泗县',
        disabled: false,
        id: 341324
      },
      {
        name: '经济开发区',
        disabled: false,
        id: 341390
      }]
    },
    {
      name: '六安市',
      disabled: false,
      id: 341500,
      children: [{
        name: '金安区',
        disabled: false,
        id: 341502
      },
      {
        name: '裕安区',
        disabled: false,
        id: 341503
      },
      {
        name: '叶集区',
        disabled: false,
        id: 341504
      },
      {
        name: '霍邱县',
        disabled: false,
        id: 341522
      },
      {
        name: '舒城县',
        disabled: false,
        id: 341523
      },
      {
        name: '金寨县',
        disabled: false,
        id: 341524
      },
      {
        name: '霍山县',
        disabled: false,
        id: 341525
      }]
    },
    {
      name: '亳州市',
      disabled: false,
      id: 341600,
      children: [{
        name: '谯城区',
        disabled: false,
        id: 341602
      },
      {
        name: '涡阳县',
        disabled: false,
        id: 341621
      },
      {
        name: '蒙城县',
        disabled: false,
        id: 341622
      },
      {
        name: '利辛县',
        disabled: false,
        id: 341623
      }]
    },
    {
      name: '池州市',
      disabled: false,
      id: 341700,
      children: [{
        name: '贵池区',
        disabled: false,
        id: 341702
      },
      {
        name: '东至县',
        disabled: false,
        id: 341721
      },
      {
        name: '石台县',
        disabled: false,
        id: 341722
      },
      {
        name: '青阳县',
        disabled: false,
        id: 341723
      }]
    },
    {
      name: '宣城市',
      disabled: false,
      id: 341800,
      children: [{
        name: '宣州区',
        disabled: false,
        id: 341802
      },
      {
        name: '郎溪县',
        disabled: false,
        id: 341821
      },
      {
        name: '广德县',
        disabled: false,
        id: 341822
      },
      {
        name: '泾县',
        disabled: false,
        id: 341823
      },
      {
        name: '绩溪县',
        disabled: false,
        id: 341824
      },
      {
        name: '旌德县',
        disabled: false,
        id: 341825
      },
      {
        name: '宁国市',
        disabled: false,
        id: 341881
      }]
    }]
  },
  {
    name: '福建省',
    disabled: false,
    id: 350000,
    children: [{
      name: '福州市',
      disabled: false,
      id: 350100,
      children: [{
        name: '鼓楼区',
        disabled: false,
        id: 350102
      },
      {
        name: '台江区',
        disabled: false,
        id: 350103
      },
      {
        name: '仓山区',
        disabled: false,
        id: 350104
      },
      {
        name: '马尾区',
        disabled: false,
        id: 350105
      },
      {
        name: '晋安区',
        disabled: false,
        id: 350111
      },
      {
        name: '长乐区',
        disabled: false,
        id: 350112
      },
      {
        name: '闽侯县',
        disabled: false,
        id: 350121
      },
      {
        name: '连江县',
        disabled: false,
        id: 350122
      },
      {
        name: '罗源县',
        disabled: false,
        id: 350123
      },
      {
        name: '闽清县',
        disabled: false,
        id: 350124
      },
      {
        name: '永泰县',
        disabled: false,
        id: 350125
      },
      {
        name: '平潭县',
        disabled: false,
        id: 350128
      },
      {
        name: '福清市',
        disabled: false,
        id: 350181
      }]
    },
    {
      name: '厦门市',
      disabled: false,
      id: 350200,
      children: [{
        name: '思明区',
        disabled: false,
        id: 350203
      },
      {
        name: '海沧区',
        disabled: false,
        id: 350205
      },
      {
        name: '湖里区',
        disabled: false,
        id: 350206
      },
      {
        name: '集美区',
        disabled: false,
        id: 350211
      },
      {
        name: '同安区',
        disabled: false,
        id: 350212
      },
      {
        name: '翔安区',
        disabled: false,
        id: 350213
      }]
    },
    {
      name: '莆田市',
      disabled: false,
      id: 350300,
      children: [{
        name: '城厢区',
        disabled: false,
        id: 350302
      },
      {
        name: '涵江区',
        disabled: false,
        id: 350303
      },
      {
        name: '荔城区',
        disabled: false,
        id: 350304
      },
      {
        name: '秀屿区',
        disabled: false,
        id: 350305
      },
      {
        name: '仙游县',
        disabled: false,
        id: 350322
      }]
    },
    {
      name: '三明市',
      disabled: false,
      id: 350400,
      children: [{
        name: '梅列区',
        disabled: false,
        id: 350402
      },
      {
        name: '三元区',
        disabled: false,
        id: 350403
      },
      {
        name: '明溪县',
        disabled: false,
        id: 350421
      },
      {
        name: '清流县',
        disabled: false,
        id: 350423
      },
      {
        name: '宁化县',
        disabled: false,
        id: 350424
      },
      {
        name: '大田县',
        disabled: false,
        id: 350425
      },
      {
        name: '尤溪县',
        disabled: false,
        id: 350426
      },
      {
        name: '沙县',
        disabled: false,
        id: 350427
      },
      {
        name: '将乐县',
        disabled: false,
        id: 350428
      },
      {
        name: '泰宁县',
        disabled: false,
        id: 350429
      },
      {
        name: '建宁县',
        disabled: false,
        id: 350430
      },
      {
        name: '永安市',
        disabled: false,
        id: 350481
      }]
    },
    {
      name: '泉州市',
      disabled: false,
      id: 350500,
      children: [{
        name: '鲤城区',
        disabled: false,
        id: 350502
      },
      {
        name: '丰泽区',
        disabled: false,
        id: 350503
      },
      {
        name: '洛江区',
        disabled: false,
        id: 350504
      },
      {
        name: '泉港区',
        disabled: false,
        id: 350505
      },
      {
        name: '惠安县',
        disabled: false,
        id: 350521
      },
      {
        name: '安溪县',
        disabled: false,
        id: 350524
      },
      {
        name: '永春县',
        disabled: false,
        id: 350525
      },
      {
        name: '德化县',
        disabled: false,
        id: 350526
      },
      {
        name: '金门县',
        disabled: false,
        id: 350527
      },
      {
        name: '石狮市',
        disabled: false,
        id: 350581
      },
      {
        name: '晋江市',
        disabled: false,
        id: 350582
      },
      {
        name: '南安市',
        disabled: false,
        id: 350583
      }]
    },
    {
      name: '漳州市',
      disabled: false,
      id: 350600,
      children: [{
        name: '芗城区',
        disabled: false,
        id: 350602
      },
      {
        name: '龙文区',
        disabled: false,
        id: 350603
      },
      {
        name: '云霄县',
        disabled: false,
        id: 350622
      },
      {
        name: '漳浦县',
        disabled: false,
        id: 350623
      },
      {
        name: '诏安县',
        disabled: false,
        id: 350624
      },
      {
        name: '长泰县',
        disabled: false,
        id: 350625
      },
      {
        name: '东山县',
        disabled: false,
        id: 350626
      },
      {
        name: '南靖县',
        disabled: false,
        id: 350627
      },
      {
        name: '平和县',
        disabled: false,
        id: 350628
      },
      {
        name: '华安县',
        disabled: false,
        id: 350629
      },
      {
        name: '龙海市',
        disabled: false,
        id: 350681
      }]
    },
    {
      name: '南平市',
      disabled: false,
      id: 350700,
      children: [{
        name: '延平区',
        disabled: false,
        id: 350702
      },
      {
        name: '建阳区',
        disabled: false,
        id: 350703
      },
      {
        name: '顺昌县',
        disabled: false,
        id: 350721
      },
      {
        name: '浦城县',
        disabled: false,
        id: 350722
      },
      {
        name: '光泽县',
        disabled: false,
        id: 350723
      },
      {
        name: '松溪县',
        disabled: false,
        id: 350724
      },
      {
        name: '政和县',
        disabled: false,
        id: 350725
      },
      {
        name: '邵武市',
        disabled: false,
        id: 350781
      },
      {
        name: '武夷山市',
        disabled: false,
        id: 350782
      },
      {
        name: '建瓯市',
        disabled: false,
        id: 350783
      }]
    },
    {
      name: '龙岩市',
      disabled: false,
      id: 350800,
      children: [{
        name: '新罗区',
        disabled: false,
        id: 350802
      },
      {
        name: '永定区',
        disabled: false,
        id: 350803
      },
      {
        name: '长汀县',
        disabled: false,
        id: 350821
      },
      {
        name: '上杭县',
        disabled: false,
        id: 350823
      },
      {
        name: '武平县',
        disabled: false,
        id: 350824
      },
      {
        name: '连城县',
        disabled: false,
        id: 350825
      },
      {
        name: '漳平市',
        disabled: false,
        id: 350881
      }]
    },
    {
      name: '宁德市',
      disabled: false,
      id: 350900,
      children: [{
        name: '蕉城区',
        disabled: false,
        id: 350902
      },
      {
        name: '霞浦县',
        disabled: false,
        id: 350921
      },
      {
        name: '古田县',
        disabled: false,
        id: 350922
      },
      {
        name: '屏南县',
        disabled: false,
        id: 350923
      },
      {
        name: '寿宁县',
        disabled: false,
        id: 350924
      },
      {
        name: '周宁县',
        disabled: false,
        id: 350925
      },
      {
        name: '柘荣县',
        disabled: false,
        id: 350926
      },
      {
        name: '福安市',
        disabled: false,
        id: 350981
      },
      {
        name: '福鼎市',
        disabled: false,
        id: 350982
      }]
    }]
  },
  {
    name: '江西省',
    disabled: false,
    id: 360000,
    children: [{
      name: '南昌市',
      disabled: false,
      id: 360100,
      children: [{
        name: '东湖区',
        disabled: false,
        id: 360102
      },
      {
        name: '西湖区',
        disabled: false,
        id: 360103
      },
      {
        name: '青云谱区',
        disabled: false,
        id: 360104
      },
      {
        name: '湾里区',
        disabled: false,
        id: 360105
      },
      {
        name: '青山湖区',
        disabled: false,
        id: 360111
      },
      {
        name: '新建区',
        disabled: false,
        id: 360112
      },
      {
        name: '南昌县',
        disabled: false,
        id: 360121
      },
      {
        name: '安义县',
        disabled: false,
        id: 360123
      },
      {
        name: '进贤县',
        disabled: false,
        id: 360124
      },
      {
        name: '经济技术开发区',
        disabled: false,
        id: 360190
      },
      {
        name: '高新区',
        disabled: false,
        id: 360192
      }]
    },
    {
      name: '景德镇市',
      disabled: false,
      id: 360200,
      children: [{
        name: '昌江区',
        disabled: false,
        id: 360202
      },
      {
        name: '珠山区',
        disabled: false,
        id: 360203
      },
      {
        name: '浮梁县',
        disabled: false,
        id: 360222
      },
      {
        name: '乐平市',
        disabled: false,
        id: 360281
      }]
    },
    {
      name: '萍乡市',
      disabled: false,
      id: 360300,
      children: [{
        name: '安源区',
        disabled: false,
        id: 360302
      },
      {
        name: '湘东区',
        disabled: false,
        id: 360313
      },
      {
        name: '莲花县',
        disabled: false,
        id: 360321
      },
      {
        name: '上栗县',
        disabled: false,
        id: 360322
      },
      {
        name: '芦溪县',
        disabled: false,
        id: 360323
      }]
    },
    {
      name: '九江市',
      disabled: false,
      id: 360400,
      children: [{
        name: '濂溪区',
        disabled: false,
        id: 360402
      },
      {
        name: '浔阳区',
        disabled: false,
        id: 360403
      },
      {
        name: '柴桑区',
        disabled: false,
        id: 360404
      },
      {
        name: '武宁县',
        disabled: false,
        id: 360423
      },
      {
        name: '修水县',
        disabled: false,
        id: 360424
      },
      {
        name: '永修县',
        disabled: false,
        id: 360425
      },
      {
        name: '德安县',
        disabled: false,
        id: 360426
      },
      {
        name: '都昌县',
        disabled: false,
        id: 360428
      },
      {
        name: '湖口县',
        disabled: false,
        id: 360429
      },
      {
        name: '彭泽县',
        disabled: false,
        id: 360430
      },
      {
        name: '瑞昌市',
        disabled: false,
        id: 360481
      },
      {
        name: '共青城市',
        disabled: false,
        id: 360482
      },
      {
        name: '庐山市',
        disabled: false,
        id: 360483
      },
      {
        name: '经济技术开发区',
        disabled: false,
        id: 360490
      }]
    },
    {
      name: '新余市',
      disabled: false,
      id: 360500,
      children: [{
        name: '渝水区',
        disabled: false,
        id: 360502
      },
      {
        name: '分宜县',
        disabled: false,
        id: 360521
      }]
    },
    {
      name: '鹰潭市',
      disabled: false,
      id: 360600,
      children: [{
        name: '月湖区',
        disabled: false,
        id: 360602
      },
      {
        name: '余江区',
        disabled: false,
        id: 360603
      },
      {
        name: '贵溪市',
        disabled: false,
        id: 360681
      }]
    },
    {
      name: '赣州市',
      disabled: false,
      id: 360700,
      children: [{
        name: '章贡区',
        disabled: false,
        id: 360702
      },
      {
        name: '南康区',
        disabled: false,
        id: 360703
      },
      {
        name: '赣县区',
        disabled: false,
        id: 360704
      },
      {
        name: '信丰县',
        disabled: false,
        id: 360722
      },
      {
        name: '大余县',
        disabled: false,
        id: 360723
      },
      {
        name: '上犹县',
        disabled: false,
        id: 360724
      },
      {
        name: '崇义县',
        disabled: false,
        id: 360725
      },
      {
        name: '安远县',
        disabled: false,
        id: 360726
      },
      {
        name: '龙南县',
        disabled: false,
        id: 360727
      },
      {
        name: '定南县',
        disabled: false,
        id: 360728
      },
      {
        name: '全南县',
        disabled: false,
        id: 360729
      },
      {
        name: '宁都县',
        disabled: false,
        id: 360730
      },
      {
        name: '于都县',
        disabled: false,
        id: 360731
      },
      {
        name: '兴国县',
        disabled: false,
        id: 360732
      },
      {
        name: '会昌县',
        disabled: false,
        id: 360733
      },
      {
        name: '寻乌县',
        disabled: false,
        id: 360734
      },
      {
        name: '石城县',
        disabled: false,
        id: 360735
      },
      {
        name: '瑞金市',
        disabled: false,
        id: 360781
      }]
    },
    {
      name: '吉安市',
      disabled: false,
      id: 360800,
      children: [{
        name: '吉州区',
        disabled: false,
        id: 360802
      },
      {
        name: '青原区',
        disabled: false,
        id: 360803
      },
      {
        name: '吉安县',
        disabled: false,
        id: 360821
      },
      {
        name: '吉水县',
        disabled: false,
        id: 360822
      },
      {
        name: '峡江县',
        disabled: false,
        id: 360823
      },
      {
        name: '新干县',
        disabled: false,
        id: 360824
      },
      {
        name: '永丰县',
        disabled: false,
        id: 360825
      },
      {
        name: '泰和县',
        disabled: false,
        id: 360826
      },
      {
        name: '遂川县',
        disabled: false,
        id: 360827
      },
      {
        name: '万安县',
        disabled: false,
        id: 360828
      },
      {
        name: '安福县',
        disabled: false,
        id: 360829
      },
      {
        name: '永新县',
        disabled: false,
        id: 360830
      },
      {
        name: '井冈山市',
        disabled: false,
        id: 360881
      }]
    },
    {
      name: '宜春市',
      disabled: false,
      id: 360900,
      children: [{
        name: '袁州区',
        disabled: false,
        id: 360902
      },
      {
        name: '奉新县',
        disabled: false,
        id: 360921
      },
      {
        name: '万载县',
        disabled: false,
        id: 360922
      },
      {
        name: '上高县',
        disabled: false,
        id: 360923
      },
      {
        name: '宜丰县',
        disabled: false,
        id: 360924
      },
      {
        name: '靖安县',
        disabled: false,
        id: 360925
      },
      {
        name: '铜鼓县',
        disabled: false,
        id: 360926
      },
      {
        name: '丰城市',
        disabled: false,
        id: 360981
      },
      {
        name: '樟树市',
        disabled: false,
        id: 360982
      },
      {
        name: '高安市',
        disabled: false,
        id: 360983
      }]
    },
    {
      name: '抚州市',
      disabled: false,
      id: 361000,
      children: [{
        name: '临川区',
        disabled: false,
        id: 361002
      },
      {
        name: '东乡区',
        disabled: false,
        id: 361003
      },
      {
        name: '南城县',
        disabled: false,
        id: 361021
      },
      {
        name: '黎川县',
        disabled: false,
        id: 361022
      },
      {
        name: '南丰县',
        disabled: false,
        id: 361023
      },
      {
        name: '崇仁县',
        disabled: false,
        id: 361024
      },
      {
        name: '乐安县',
        disabled: false,
        id: 361025
      },
      {
        name: '宜黄县',
        disabled: false,
        id: 361026
      },
      {
        name: '金溪县',
        disabled: false,
        id: 361027
      },
      {
        name: '资溪县',
        disabled: false,
        id: 361028
      },
      {
        name: '广昌县',
        disabled: false,
        id: 361030
      }]
    },
    {
      name: '上饶市',
      disabled: false,
      id: 361100,
      children: [{
        name: '信州区',
        disabled: false,
        id: 361102
      },
      {
        name: '广丰区',
        disabled: false,
        id: 361103
      },
      {
        name: '上饶县',
        disabled: false,
        id: 361121
      },
      {
        name: '玉山县',
        disabled: false,
        id: 361123
      },
      {
        name: '铅山县',
        disabled: false,
        id: 361124
      },
      {
        name: '横峰县',
        disabled: false,
        id: 361125
      },
      {
        name: '弋阳县',
        disabled: false,
        id: 361126
      },
      {
        name: '余干县',
        disabled: false,
        id: 361127
      },
      {
        name: '鄱阳县',
        disabled: false,
        id: 361128
      },
      {
        name: '万年县',
        disabled: false,
        id: 361129
      },
      {
        name: '婺源县',
        disabled: false,
        id: 361130
      },
      {
        name: '德兴市',
        disabled: false,
        id: 361181
      }]
    }]
  },
  {
    name: '山东省',
    disabled: false,
    id: 370000,
    children: [{
      name: '济南市',
      disabled: false,
      id: 370100,
      children: [{
        name: '历下区',
        disabled: false,
        id: 370102
      },
      {
        name: '市中区',
        disabled: false,
        id: 370103
      },
      {
        name: '槐荫区',
        disabled: false,
        id: 370104
      },
      {
        name: '天桥区',
        disabled: false,
        id: 370105
      },
      {
        name: '历城区',
        disabled: false,
        id: 370112
      },
      {
        name: '长清区',
        disabled: false,
        id: 370113
      },
      {
        name: '章丘区',
        disabled: false,
        id: 370114
      },
      {
        name: '济阳区',
        disabled: false,
        id: 370115
      },
      {
        name: '平阴县',
        disabled: false,
        id: 370124
      },
      {
        name: '商河县',
        disabled: false,
        id: 370126
      },
      {
        name: '高新区',
        disabled: false,
        id: 370190
      },
      {
        name: '莱芜区',
        disabled: false,
        id: 370191
      }]
    },
    {
      name: '青岛市',
      disabled: false,
      id: 370200,
      children: [{
        name: '市南区',
        disabled: false,
        id: 370202
      },
      {
        name: '市北区',
        disabled: false,
        id: 370203
      },
      {
        name: '黄岛区',
        disabled: false,
        id: 370211
      },
      {
        name: '崂山区',
        disabled: false,
        id: 370212
      },
      {
        name: '李沧区',
        disabled: false,
        id: 370213
      },
      {
        name: '城阳区',
        disabled: false,
        id: 370214
      },
      {
        name: '即墨区',
        disabled: false,
        id: 370215
      },
      {
        name: '胶州市',
        disabled: false,
        id: 370281
      },
      {
        name: '平度市',
        disabled: false,
        id: 370283
      },
      {
        name: '莱西市',
        disabled: false,
        id: 370285
      },
      {
        name: '开发区',
        disabled: false,
        id: 370290
      }]
    },
    {
      name: '淄博市',
      disabled: false,
      id: 370300,
      children: [{
        name: '淄川区',
        disabled: false,
        id: 370302
      },
      {
        name: '张店区',
        disabled: false,
        id: 370303
      },
      {
        name: '博山区',
        disabled: false,
        id: 370304
      },
      {
        name: '临淄区',
        disabled: false,
        id: 370305
      },
      {
        name: '周村区',
        disabled: false,
        id: 370306
      },
      {
        name: '桓台县',
        disabled: false,
        id: 370321
      },
      {
        name: '高青县',
        disabled: false,
        id: 370322
      },
      {
        name: '沂源县',
        disabled: false,
        id: 370323
      }]
    },
    {
      name: '枣庄市',
      disabled: false,
      id: 370400,
      children: [{
        name: '市中区',
        disabled: false,
        id: 370402
      },
      {
        name: '薛城区',
        disabled: false,
        id: 370403
      },
      {
        name: '峄城区',
        disabled: false,
        id: 370404
      },
      {
        name: '台儿庄区',
        disabled: false,
        id: 370405
      },
      {
        name: '山亭区',
        disabled: false,
        id: 370406
      },
      {
        name: '滕州市',
        disabled: false,
        id: 370481
      }]
    },
    {
      name: '东营市',
      disabled: false,
      id: 370500,
      children: [{
        name: '东营区',
        disabled: false,
        id: 370502
      },
      {
        name: '河口区',
        disabled: false,
        id: 370503
      },
      {
        name: '垦利区',
        disabled: false,
        id: 370505
      },
      {
        name: '利津县',
        disabled: false,
        id: 370522
      },
      {
        name: '广饶县',
        disabled: false,
        id: 370523
      }]
    },
    {
      name: '烟台市',
      disabled: false,
      id: 370600,
      children: [{
        name: '芝罘区',
        disabled: false,
        id: 370602
      },
      {
        name: '福山区',
        disabled: false,
        id: 370611
      },
      {
        name: '牟平区',
        disabled: false,
        id: 370612
      },
      {
        name: '莱山区',
        disabled: false,
        id: 370613
      },
      {
        name: '长岛县',
        disabled: false,
        id: 370634
      },
      {
        name: '龙口市',
        disabled: false,
        id: 370681
      },
      {
        name: '莱阳市',
        disabled: false,
        id: 370682
      },
      {
        name: '莱州市',
        disabled: false,
        id: 370683
      },
      {
        name: '蓬莱市',
        disabled: false,
        id: 370684
      },
      {
        name: '招远市',
        disabled: false,
        id: 370685
      },
      {
        name: '栖霞市',
        disabled: false,
        id: 370686
      },
      {
        name: '海阳市',
        disabled: false,
        id: 370687
      },
      {
        name: '开发区',
        disabled: false,
        id: 370690
      }]
    },
    {
      name: '潍坊市',
      disabled: false,
      id: 370700,
      children: [{
        name: '潍城区',
        disabled: false,
        id: 370702
      },
      {
        name: '寒亭区',
        disabled: false,
        id: 370703
      },
      {
        name: '坊子区',
        disabled: false,
        id: 370704
      },
      {
        name: '奎文区',
        disabled: false,
        id: 370705
      },
      {
        name: '临朐县',
        disabled: false,
        id: 370724
      },
      {
        name: '昌乐县',
        disabled: false,
        id: 370725
      },
      {
        name: '青州市',
        disabled: false,
        id: 370781
      },
      {
        name: '诸城市',
        disabled: false,
        id: 370782
      },
      {
        name: '寿光市',
        disabled: false,
        id: 370783
      },
      {
        name: '安丘市',
        disabled: false,
        id: 370784
      },
      {
        name: '高密市',
        disabled: false,
        id: 370785
      },
      {
        name: '昌邑市',
        disabled: false,
        id: 370786
      },
      {
        name: '开发区',
        disabled: false,
        id: 370790
      },
      {
        name: '高新区',
        disabled: false,
        id: 370791
      }]
    },
    {
      name: '济宁市',
      disabled: false,
      id: 370800,
      children: [{
        name: '任城区',
        disabled: false,
        id: 370811
      },
      {
        name: '兖州区',
        disabled: false,
        id: 370812
      },
      {
        name: '微山县',
        disabled: false,
        id: 370826
      },
      {
        name: '鱼台县',
        disabled: false,
        id: 370827
      },
      {
        name: '金乡县',
        disabled: false,
        id: 370828
      },
      {
        name: '嘉祥县',
        disabled: false,
        id: 370829
      },
      {
        name: '汶上县',
        disabled: false,
        id: 370830
      },
      {
        name: '泗水县',
        disabled: false,
        id: 370831
      },
      {
        name: '梁山县',
        disabled: false,
        id: 370832
      },
      {
        name: '曲阜市',
        disabled: false,
        id: 370881
      },
      {
        name: '邹城市',
        disabled: false,
        id: 370883
      },
      {
        name: '高新区',
        disabled: false,
        id: 370890
      }]
    },
    {
      name: '泰安市',
      disabled: false,
      id: 370900,
      children: [{
        name: '泰山区',
        disabled: false,
        id: 370902
      },
      {
        name: '岱岳区',
        disabled: false,
        id: 370911
      },
      {
        name: '宁阳县',
        disabled: false,
        id: 370921
      },
      {
        name: '东平县',
        disabled: false,
        id: 370923
      },
      {
        name: '新泰市',
        disabled: false,
        id: 370982
      },
      {
        name: '肥城市',
        disabled: false,
        id: 370983
      }]
    },
    {
      name: '威海市',
      disabled: false,
      id: 371000,
      children: [{
        name: '环翠区',
        disabled: false,
        id: 371002
      },
      {
        name: '文登区',
        disabled: false,
        id: 371003
      },
      {
        name: '荣成市',
        disabled: false,
        id: 371082
      },
      {
        name: '乳山市',
        disabled: false,
        id: 371083
      },
      {
        name: '经济技术开发区',
        disabled: false,
        id: 371091
      }]
    },
    {
      name: '日照市',
      disabled: false,
      id: 371100,
      children: [{
        name: '东港区',
        disabled: false,
        id: 371102
      },
      {
        name: '岚山区',
        disabled: false,
        id: 371103
      },
      {
        name: '五莲县',
        disabled: false,
        id: 371121
      },
      {
        name: '莒县',
        disabled: false,
        id: 371122
      }]
    },
    {
      name: '临沂市',
      disabled: false,
      id: 371300,
      children: [{
        name: '兰山区',
        disabled: false,
        id: 371302
      },
      {
        name: '罗庄区',
        disabled: false,
        id: 371311
      },
      {
        name: '河东区',
        disabled: false,
        id: 371312
      },
      {
        name: '沂南县',
        disabled: false,
        id: 371321
      },
      {
        name: '郯城县',
        disabled: false,
        id: 371322
      },
      {
        name: '沂水县',
        disabled: false,
        id: 371323
      },
      {
        name: '兰陵县',
        disabled: false,
        id: 371324
      },
      {
        name: '费县',
        disabled: false,
        id: 371325
      },
      {
        name: '平邑县',
        disabled: false,
        id: 371326
      },
      {
        name: '莒南县',
        disabled: false,
        id: 371327
      },
      {
        name: '蒙阴县',
        disabled: false,
        id: 371328
      },
      {
        name: '临沭县',
        disabled: false,
        id: 371329
      }]
    },
    {
      name: '德州市',
      disabled: false,
      id: 371400,
      children: [{
        name: '德城区',
        disabled: false,
        id: 371402
      },
      {
        name: '陵城区',
        disabled: false,
        id: 371403
      },
      {
        name: '宁津县',
        disabled: false,
        id: 371422
      },
      {
        name: '庆云县',
        disabled: false,
        id: 371423
      },
      {
        name: '临邑县',
        disabled: false,
        id: 371424
      },
      {
        name: '齐河县',
        disabled: false,
        id: 371425
      },
      {
        name: '平原县',
        disabled: false,
        id: 371426
      },
      {
        name: '夏津县',
        disabled: false,
        id: 371427
      },
      {
        name: '武城县',
        disabled: false,
        id: 371428
      },
      {
        name: '乐陵市',
        disabled: false,
        id: 371481
      },
      {
        name: '禹城市',
        disabled: false,
        id: 371482
      }]
    },
    {
      name: '聊城市',
      disabled: false,
      id: 371500,
      children: [{
        name: '东昌府区',
        disabled: false,
        id: 371502
      },
      {
        name: '阳谷县',
        disabled: false,
        id: 371521
      },
      {
        name: '莘县',
        disabled: false,
        id: 371522
      },
      {
        name: '茌平县',
        disabled: false,
        id: 371523
      },
      {
        name: '东阿县',
        disabled: false,
        id: 371524
      },
      {
        name: '冠县',
        disabled: false,
        id: 371525
      },
      {
        name: '高唐县',
        disabled: false,
        id: 371526
      },
      {
        name: '临清市',
        disabled: false,
        id: 371581
      }]
    },
    {
      name: '滨州市',
      disabled: false,
      id: 371600,
      children: [{
        name: '滨城区',
        disabled: false,
        id: 371602
      },
      {
        name: '沾化区',
        disabled: false,
        id: 371603
      },
      {
        name: '惠民县',
        disabled: false,
        id: 371621
      },
      {
        name: '阳信县',
        disabled: false,
        id: 371622
      },
      {
        name: '无棣县',
        disabled: false,
        id: 371623
      },
      {
        name: '博兴县',
        disabled: false,
        id: 371625
      },
      {
        name: '邹平市',
        disabled: false,
        id: 371681
      }]
    },
    {
      name: '菏泽市',
      disabled: false,
      id: 371700,
      children: [{
        name: '牡丹区',
        disabled: false,
        id: 371702
      },
      {
        name: '定陶区',
        disabled: false,
        id: 371703
      },
      {
        name: '曹县',
        disabled: false,
        id: 371721
      },
      {
        name: '单县',
        disabled: false,
        id: 371722
      },
      {
        name: '成武县',
        disabled: false,
        id: 371723
      },
      {
        name: '巨野县',
        disabled: false,
        id: 371724
      },
      {
        name: '郓城县',
        disabled: false,
        id: 371725
      },
      {
        name: '鄄城县',
        disabled: false,
        id: 371726
      },
      {
        name: '东明县',
        disabled: false,
        id: 371728
      }]
    }]
  },
  {
    name: '河南省',
    disabled: false,
    id: 410000,
    children: [{
      name: '郑州市',
      disabled: false,
      id: 410100,
      children: [{
        name: '中原区',
        disabled: false,
        id: 410102
      },
      {
        name: '二七区',
        disabled: false,
        id: 410103
      },
      {
        name: '管城回族区',
        disabled: false,
        id: 410104
      },
      {
        name: '金水区',
        disabled: false,
        id: 410105
      },
      {
        name: '上街区',
        disabled: false,
        id: 410106
      },
      {
        name: '惠济区',
        disabled: false,
        id: 410108
      },
      {
        name: '中牟县',
        disabled: false,
        id: 410122
      },
      {
        name: '巩义市',
        disabled: false,
        id: 410181
      },
      {
        name: '荥阳市',
        disabled: false,
        id: 410182
      },
      {
        name: '新密市',
        disabled: false,
        id: 410183
      },
      {
        name: '新郑市',
        disabled: false,
        id: 410184
      },
      {
        name: '登封市',
        disabled: false,
        id: 410185
      },
      {
        name: '高新技术开发区',
        disabled: false,
        id: 410190
      },
      {
        name: '经济技术开发区',
        disabled: false,
        id: 410191
      }]
    },
    {
      name: '开封市',
      disabled: false,
      id: 410200,
      children: [{
        name: '龙亭区',
        disabled: false,
        id: 410202
      },
      {
        name: '顺河回族区',
        disabled: false,
        id: 410203
      },
      {
        name: '鼓楼区',
        disabled: false,
        id: 410204
      },
      {
        name: '禹王台区',
        disabled: false,
        id: 410205
      },
      {
        name: '祥符区',
        disabled: false,
        id: 410212
      },
      {
        name: '杞县',
        disabled: false,
        id: 410221
      },
      {
        name: '通许县',
        disabled: false,
        id: 410222
      },
      {
        name: '尉氏县',
        disabled: false,
        id: 410223
      },
      {
        name: '兰考县',
        disabled: false,
        id: 410225
      }]
    },
    {
      name: '洛阳市',
      disabled: false,
      id: 410300,
      children: [{
        name: '老城区',
        disabled: false,
        id: 410302
      },
      {
        name: '西工区',
        disabled: false,
        id: 410303
      },
      {
        name: '瀍河回族区',
        disabled: false,
        id: 410304
      },
      {
        name: '涧西区',
        disabled: false,
        id: 410305
      },
      {
        name: '吉利区',
        disabled: false,
        id: 410306
      },
      {
        name: '洛龙区',
        disabled: false,
        id: 410311
      },
      {
        name: '孟津县',
        disabled: false,
        id: 410322
      },
      {
        name: '新安县',
        disabled: false,
        id: 410323
      },
      {
        name: '栾川县',
        disabled: false,
        id: 410324
      },
      {
        name: '嵩县',
        disabled: false,
        id: 410325
      },
      {
        name: '汝阳县',
        disabled: false,
        id: 410326
      },
      {
        name: '宜阳县',
        disabled: false,
        id: 410327
      },
      {
        name: '洛宁县',
        disabled: false,
        id: 410328
      },
      {
        name: '伊川县',
        disabled: false,
        id: 410329
      },
      {
        name: '偃师市',
        disabled: false,
        id: 410381
      }]
    },
    {
      name: '平顶山市',
      disabled: false,
      id: 410400,
      children: [{
        name: '新华区',
        disabled: false,
        id: 410402
      },
      {
        name: '卫东区',
        disabled: false,
        id: 410403
      },
      {
        name: '石龙区',
        disabled: false,
        id: 410404
      },
      {
        name: '湛河区',
        disabled: false,
        id: 410411
      },
      {
        name: '宝丰县',
        disabled: false,
        id: 410421
      },
      {
        name: '叶县',
        disabled: false,
        id: 410422
      },
      {
        name: '鲁山县',
        disabled: false,
        id: 410423
      },
      {
        name: '郏县',
        disabled: false,
        id: 410425
      },
      {
        name: '舞钢市',
        disabled: false,
        id: 410481
      },
      {
        name: '汝州市',
        disabled: false,
        id: 410482
      }]
    },
    {
      name: '安阳市',
      disabled: false,
      id: 410500,
      children: [{
        name: '文峰区',
        disabled: false,
        id: 410502
      },
      {
        name: '北关区',
        disabled: false,
        id: 410503
      },
      {
        name: '殷都区',
        disabled: false,
        id: 410505
      },
      {
        name: '龙安区',
        disabled: false,
        id: 410506
      },
      {
        name: '安阳县',
        disabled: false,
        id: 410522
      },
      {
        name: '汤阴县',
        disabled: false,
        id: 410523
      },
      {
        name: '滑县',
        disabled: false,
        id: 410526
      },
      {
        name: '内黄县',
        disabled: false,
        id: 410527
      },
      {
        name: '林州市',
        disabled: false,
        id: 410581
      },
      {
        name: '开发区',
        disabled: false,
        id: 410590
      }]
    },
    {
      name: '鹤壁市',
      disabled: false,
      id: 410600,
      children: [{
        name: '鹤山区',
        disabled: false,
        id: 410602
      },
      {
        name: '山城区',
        disabled: false,
        id: 410603
      },
      {
        name: '淇滨区',
        disabled: false,
        id: 410611
      },
      {
        name: '浚县',
        disabled: false,
        id: 410621
      },
      {
        name: '淇县',
        disabled: false,
        id: 410622
      }]
    },
    {
      name: '新乡市',
      disabled: false,
      id: 410700,
      children: [{
        name: '红旗区',
        disabled: false,
        id: 410702
      },
      {
        name: '卫滨区',
        disabled: false,
        id: 410703
      },
      {
        name: '凤泉区',
        disabled: false,
        id: 410704
      },
      {
        name: '牧野区',
        disabled: false,
        id: 410711
      },
      {
        name: '新乡县',
        disabled: false,
        id: 410721
      },
      {
        name: '获嘉县',
        disabled: false,
        id: 410724
      },
      {
        name: '原阳县',
        disabled: false,
        id: 410725
      },
      {
        name: '延津县',
        disabled: false,
        id: 410726
      },
      {
        name: '封丘县',
        disabled: false,
        id: 410727
      },
      {
        name: '长垣县',
        disabled: false,
        id: 410728
      },
      {
        name: '卫辉市',
        disabled: false,
        id: 410781
      },
      {
        name: '辉县市',
        disabled: false,
        id: 410782
      }]
    },
    {
      name: '焦作市',
      disabled: false,
      id: 410800,
      children: [{
        name: '解放区',
        disabled: false,
        id: 410802
      },
      {
        name: '中站区',
        disabled: false,
        id: 410803
      },
      {
        name: '马村区',
        disabled: false,
        id: 410804
      },
      {
        name: '山阳区',
        disabled: false,
        id: 410811
      },
      {
        name: '修武县',
        disabled: false,
        id: 410821
      },
      {
        name: '博爱县',
        disabled: false,
        id: 410822
      },
      {
        name: '武陟县',
        disabled: false,
        id: 410823
      },
      {
        name: '温县',
        disabled: false,
        id: 410825
      },
      {
        name: '沁阳市',
        disabled: false,
        id: 410882
      },
      {
        name: '孟州市',
        disabled: false,
        id: 410883
      }]
    },
    {
      name: '濮阳市',
      disabled: false,
      id: 410900,
      children: [{
        name: '华龙区',
        disabled: false,
        id: 410902
      },
      {
        name: '清丰县',
        disabled: false,
        id: 410922
      },
      {
        name: '南乐县',
        disabled: false,
        id: 410923
      },
      {
        name: '范县',
        disabled: false,
        id: 410926
      },
      {
        name: '台前县',
        disabled: false,
        id: 410927
      },
      {
        name: '濮阳县',
        disabled: false,
        id: 410928
      }]
    },
    {
      name: '许昌市',
      disabled: false,
      id: 411000,
      children: [{
        name: '魏都区',
        disabled: false,
        id: 411002
      },
      {
        name: '建安区',
        disabled: false,
        id: 411003
      },
      {
        name: '鄢陵县',
        disabled: false,
        id: 411024
      },
      {
        name: '襄城县',
        disabled: false,
        id: 411025
      },
      {
        name: '禹州市',
        disabled: false,
        id: 411081
      },
      {
        name: '长葛市',
        disabled: false,
        id: 411082
      }]
    },
    {
      name: '漯河市',
      disabled: false,
      id: 411100,
      children: [{
        name: '源汇区',
        disabled: false,
        id: 411102
      },
      {
        name: '郾城区',
        disabled: false,
        id: 411103
      },
      {
        name: '召陵区',
        disabled: false,
        id: 411104
      },
      {
        name: '舞阳县',
        disabled: false,
        id: 411121
      },
      {
        name: '临颍县',
        disabled: false,
        id: 411122
      }]
    },
    {
      name: '三门峡市',
      disabled: false,
      id: 411200,
      children: [{
        name: '湖滨区',
        disabled: false,
        id: 411202
      },
      {
        name: '陕州区',
        disabled: false,
        id: 411203
      },
      {
        name: '渑池县',
        disabled: false,
        id: 411221
      },
      {
        name: '卢氏县',
        disabled: false,
        id: 411224
      },
      {
        name: '义马市',
        disabled: false,
        id: 411281
      },
      {
        name: '灵宝市',
        disabled: false,
        id: 411282
      }]
    },
    {
      name: '南阳市',
      disabled: false,
      id: 411300,
      children: [{
        name: '宛城区',
        disabled: false,
        id: 411302
      },
      {
        name: '卧龙区',
        disabled: false,
        id: 411303
      },
      {
        name: '南召县',
        disabled: false,
        id: 411321
      },
      {
        name: '方城县',
        disabled: false,
        id: 411322
      },
      {
        name: '西峡县',
        disabled: false,
        id: 411323
      },
      {
        name: '镇平县',
        disabled: false,
        id: 411324
      },
      {
        name: '内乡县',
        disabled: false,
        id: 411325
      },
      {
        name: '淅川县',
        disabled: false,
        id: 411326
      },
      {
        name: '社旗县',
        disabled: false,
        id: 411327
      },
      {
        name: '唐河县',
        disabled: false,
        id: 411328
      },
      {
        name: '新野县',
        disabled: false,
        id: 411329
      },
      {
        name: '桐柏县',
        disabled: false,
        id: 411330
      },
      {
        name: '邓州市',
        disabled: false,
        id: 411381
      }]
    },
    {
      name: '商丘市',
      disabled: false,
      id: 411400,
      children: [{
        name: '梁园区',
        disabled: false,
        id: 411402
      },
      {
        name: '睢阳区',
        disabled: false,
        id: 411403
      },
      {
        name: '民权县',
        disabled: false,
        id: 411421
      },
      {
        name: '睢县',
        disabled: false,
        id: 411422
      },
      {
        name: '宁陵县',
        disabled: false,
        id: 411423
      },
      {
        name: '柘城县',
        disabled: false,
        id: 411424
      },
      {
        name: '虞城县',
        disabled: false,
        id: 411425
      },
      {
        name: '夏邑县',
        disabled: false,
        id: 411426
      },
      {
        name: '永城市',
        disabled: false,
        id: 411481
      }]
    },
    {
      name: '信阳市',
      disabled: false,
      id: 411500,
      children: [{
        name: '浉河区',
        disabled: false,
        id: 411502
      },
      {
        name: '平桥区',
        disabled: false,
        id: 411503
      },
      {
        name: '罗山县',
        disabled: false,
        id: 411521
      },
      {
        name: '光山县',
        disabled: false,
        id: 411522
      },
      {
        name: '新县',
        disabled: false,
        id: 411523
      },
      {
        name: '商城县',
        disabled: false,
        id: 411524
      },
      {
        name: '固始县',
        disabled: false,
        id: 411525
      },
      {
        name: '潢川县',
        disabled: false,
        id: 411526
      },
      {
        name: '淮滨县',
        disabled: false,
        id: 411527
      },
      {
        name: '息县',
        disabled: false,
        id: 411528
      }]
    },
    {
      name: '周口市',
      disabled: false,
      id: 411600,
      children: [{
        name: '川汇区',
        disabled: false,
        id: 411602
      },
      {
        name: '扶沟县',
        disabled: false,
        id: 411621
      },
      {
        name: '西华县',
        disabled: false,
        id: 411622
      },
      {
        name: '商水县',
        disabled: false,
        id: 411623
      },
      {
        name: '沈丘县',
        disabled: false,
        id: 411624
      },
      {
        name: '郸城县',
        disabled: false,
        id: 411625
      },
      {
        name: '淮阳县',
        disabled: false,
        id: 411626
      },
      {
        name: '太康县',
        disabled: false,
        id: 411627
      },
      {
        name: '鹿邑县',
        disabled: false,
        id: 411628
      },
      {
        name: '项城市',
        disabled: false,
        id: 411681
      },
      {
        name: '经济开发区',
        disabled: false,
        id: 411690
      }]
    },
    {
      name: '驻马店市',
      disabled: false,
      id: 411700,
      children: [{
        name: '驿城区',
        disabled: false,
        id: 411702
      },
      {
        name: '西平县',
        disabled: false,
        id: 411721
      },
      {
        name: '上蔡县',
        disabled: false,
        id: 411722
      },
      {
        name: '平舆县',
        disabled: false,
        id: 411723
      },
      {
        name: '正阳县',
        disabled: false,
        id: 411724
      },
      {
        name: '确山县',
        disabled: false,
        id: 411725
      },
      {
        name: '泌阳县',
        disabled: false,
        id: 411726
      },
      {
        name: '汝南县',
        disabled: false,
        id: 411727
      },
      {
        name: '遂平县',
        disabled: false,
        id: 411728
      },
      {
        name: '新蔡县',
        disabled: false,
        id: 411729
      }]
    },
    {
      name: '省直辖县',
      disabled: false,
      id: 419000,
      children: [{
        name: '济源市',
        disabled: false,
        id: 419001
      }]
    }]
  },
  {
    name: '湖北省',
    disabled: false,
    id: 420000,
    children: [{
      name: '武汉市',
      disabled: false,
      id: 420100,
      children: [{
        name: '江岸区',
        disabled: false,
        id: 420102
      },
      {
        name: '江汉区',
        disabled: false,
        id: 420103
      },
      {
        name: '硚口区',
        disabled: false,
        id: 420104
      },
      {
        name: '汉阳区',
        disabled: false,
        id: 420105
      },
      {
        name: '武昌区',
        disabled: false,
        id: 420106
      },
      {
        name: '青山区',
        disabled: false,
        id: 420107
      },
      {
        name: '洪山区',
        disabled: false,
        id: 420111
      },
      {
        name: '东西湖区',
        disabled: false,
        id: 420112
      },
      {
        name: '汉南区',
        disabled: false,
        id: 420113
      },
      {
        name: '蔡甸区',
        disabled: false,
        id: 420114
      },
      {
        name: '江夏区',
        disabled: false,
        id: 420115
      },
      {
        name: '黄陂区',
        disabled: false,
        id: 420116
      },
      {
        name: '新洲区',
        disabled: false,
        id: 420117
      }]
    },
    {
      name: '黄石市',
      disabled: false,
      id: 420200,
      children: [{
        name: '黄石港区',
        disabled: false,
        id: 420202
      },
      {
        name: '西塞山区',
        disabled: false,
        id: 420203
      },
      {
        name: '下陆区',
        disabled: false,
        id: 420204
      },
      {
        name: '铁山区',
        disabled: false,
        id: 420205
      },
      {
        name: '阳新县',
        disabled: false,
        id: 420222
      },
      {
        name: '大冶市',
        disabled: false,
        id: 420281
      }]
    },
    {
      name: '十堰市',
      disabled: false,
      id: 420300,
      children: [{
        name: '茅箭区',
        disabled: false,
        id: 420302
      },
      {
        name: '张湾区',
        disabled: false,
        id: 420303
      },
      {
        name: '郧阳区',
        disabled: false,
        id: 420304
      },
      {
        name: '郧西县',
        disabled: false,
        id: 420322
      },
      {
        name: '竹山县',
        disabled: false,
        id: 420323
      },
      {
        name: '竹溪县',
        disabled: false,
        id: 420324
      },
      {
        name: '房县',
        disabled: false,
        id: 420325
      },
      {
        name: '丹江口市',
        disabled: false,
        id: 420381
      }]
    },
    {
      name: '宜昌市',
      disabled: false,
      id: 420500,
      children: [{
        name: '西陵区',
        disabled: false,
        id: 420502
      },
      {
        name: '伍家岗区',
        disabled: false,
        id: 420503
      },
      {
        name: '点军区',
        disabled: false,
        id: 420504
      },
      {
        name: '猇亭区',
        disabled: false,
        id: 420505
      },
      {
        name: '夷陵区',
        disabled: false,
        id: 420506
      },
      {
        name: '远安县',
        disabled: false,
        id: 420525
      },
      {
        name: '兴山县',
        disabled: false,
        id: 420526
      },
      {
        name: '秭归县',
        disabled: false,
        id: 420527
      },
      {
        name: '长阳土家族自治县',
        disabled: false,
        id: 420528
      },
      {
        name: '五峰土家族自治县',
        disabled: false,
        id: 420529
      },
      {
        name: '宜都市',
        disabled: false,
        id: 420581
      },
      {
        name: '当阳市',
        disabled: false,
        id: 420582
      },
      {
        name: '枝江市',
        disabled: false,
        id: 420583
      },
      {
        name: '经济开发区',
        disabled: false,
        id: 420590
      }]
    },
    {
      name: '襄阳市',
      disabled: false,
      id: 420600,
      children: [{
        name: '襄城区',
        disabled: false,
        id: 420602
      },
      {
        name: '樊城区',
        disabled: false,
        id: 420606
      },
      {
        name: '襄州区',
        disabled: false,
        id: 420607
      },
      {
        name: '南漳县',
        disabled: false,
        id: 420624
      },
      {
        name: '谷城县',
        disabled: false,
        id: 420625
      },
      {
        name: '保康县',
        disabled: false,
        id: 420626
      },
      {
        name: '老河口市',
        disabled: false,
        id: 420682
      },
      {
        name: '枣阳市',
        disabled: false,
        id: 420683
      },
      {
        name: '宜城市',
        disabled: false,
        id: 420684
      }]
    },
    {
      name: '鄂州市',
      disabled: false,
      id: 420700,
      children: [{
        name: '梁子湖区',
        disabled: false,
        id: 420702
      },
      {
        name: '华容区',
        disabled: false,
        id: 420703
      },
      {
        name: '鄂城区',
        disabled: false,
        id: 420704
      }]
    },
    {
      name: '荆门市',
      disabled: false,
      id: 420800,
      children: [{
        name: '东宝区',
        disabled: false,
        id: 420802
      },
      {
        name: '掇刀区',
        disabled: false,
        id: 420804
      },
      {
        name: '沙洋县',
        disabled: false,
        id: 420822
      },
      {
        name: '钟祥市',
        disabled: false,
        id: 420881
      },
      {
        name: '京山市',
        disabled: false,
        id: 420882
      }]
    },
    {
      name: '孝感市',
      disabled: false,
      id: 420900,
      children: [{
        name: '孝南区',
        disabled: false,
        id: 420902
      },
      {
        name: '孝昌县',
        disabled: false,
        id: 420921
      },
      {
        name: '大悟县',
        disabled: false,
        id: 420922
      },
      {
        name: '云梦县',
        disabled: false,
        id: 420923
      },
      {
        name: '应城市',
        disabled: false,
        id: 420981
      },
      {
        name: '安陆市',
        disabled: false,
        id: 420982
      },
      {
        name: '汉川市',
        disabled: false,
        id: 420984
      }]
    },
    {
      name: '荆州市',
      disabled: false,
      id: 421000,
      children: [{
        name: '沙市区',
        disabled: false,
        id: 421002
      },
      {
        name: '荆州区',
        disabled: false,
        id: 421003
      },
      {
        name: '公安县',
        disabled: false,
        id: 421022
      },
      {
        name: '监利县',
        disabled: false,
        id: 421023
      },
      {
        name: '江陵县',
        disabled: false,
        id: 421024
      },
      {
        name: '石首市',
        disabled: false,
        id: 421081
      },
      {
        name: '洪湖市',
        disabled: false,
        id: 421083
      },
      {
        name: '松滋市',
        disabled: false,
        id: 421087
      }]
    },
    {
      name: '黄冈市',
      disabled: false,
      id: 421100,
      children: [{
        name: '黄州区',
        disabled: false,
        id: 421102
      },
      {
        name: '团风县',
        disabled: false,
        id: 421121
      },
      {
        name: '红安县',
        disabled: false,
        id: 421122
      },
      {
        name: '罗田县',
        disabled: false,
        id: 421123
      },
      {
        name: '英山县',
        disabled: false,
        id: 421124
      },
      {
        name: '浠水县',
        disabled: false,
        id: 421125
      },
      {
        name: '蕲春县',
        disabled: false,
        id: 421126
      },
      {
        name: '黄梅县',
        disabled: false,
        id: 421127
      },
      {
        name: '麻城市',
        disabled: false,
        id: 421181
      },
      {
        name: '武穴市',
        disabled: false,
        id: 421182
      }]
    },
    {
      name: '咸宁市',
      disabled: false,
      id: 421200,
      children: [{
        name: '咸安区',
        disabled: false,
        id: 421202
      },
      {
        name: '嘉鱼县',
        disabled: false,
        id: 421221
      },
      {
        name: '通城县',
        disabled: false,
        id: 421222
      },
      {
        name: '崇阳县',
        disabled: false,
        id: 421223
      },
      {
        name: '通山县',
        disabled: false,
        id: 421224
      },
      {
        name: '赤壁市',
        disabled: false,
        id: 421281
      }]
    },
    {
      name: '随州市',
      disabled: false,
      id: 421300,
      children: [{
        name: '曾都区',
        disabled: false,
        id: 421303
      },
      {
        name: '随县',
        disabled: false,
        id: 421321
      },
      {
        name: '广水市',
        disabled: false,
        id: 421381
      }]
    },
    {
      name: '恩施土家族苗族自治州',
      disabled: false,
      id: 422800,
      children: [{
        name: '恩施市',
        disabled: false,
        id: 422801
      },
      {
        name: '利川市',
        disabled: false,
        id: 422802
      },
      {
        name: '建始县',
        disabled: false,
        id: 422822
      },
      {
        name: '巴东县',
        disabled: false,
        id: 422823
      },
      {
        name: '宣恩县',
        disabled: false,
        id: 422825
      },
      {
        name: '咸丰县',
        disabled: false,
        id: 422826
      },
      {
        name: '来凤县',
        disabled: false,
        id: 422827
      },
      {
        name: '鹤峰县',
        disabled: false,
        id: 422828
      }]
    },
    {
      name: '省直辖县',
      disabled: false,
      id: 429000,
      children: [{
        name: '仙桃市',
        disabled: false,
        id: 429004
      },
      {
        name: '潜江市',
        disabled: false,
        id: 429005
      },
      {
        name: '天门市',
        disabled: false,
        id: 429006
      },
      {
        name: '神农架林区',
        disabled: false,
        id: 429021
      }]
    }]
  },
  {
    name: '湖南省',
    disabled: false,
    id: 430000,
    children: [{
      name: '长沙市',
      disabled: false,
      id: 430100,
      children: [{
        name: '芙蓉区',
        disabled: false,
        id: 430102
      },
      {
        name: '天心区',
        disabled: false,
        id: 430103
      },
      {
        name: '岳麓区',
        disabled: false,
        id: 430104
      },
      {
        name: '开福区',
        disabled: false,
        id: 430105
      },
      {
        name: '雨花区',
        disabled: false,
        id: 430111
      },
      {
        name: '望城区',
        disabled: false,
        id: 430112
      },
      {
        name: '长沙县',
        disabled: false,
        id: 430121
      },
      {
        name: '浏阳市',
        disabled: false,
        id: 430181
      },
      {
        name: '宁乡市',
        disabled: false,
        id: 430182
      }]
    },
    {
      name: '株洲市',
      disabled: false,
      id: 430200,
      children: [{
        name: '荷塘区',
        disabled: false,
        id: 430202
      },
      {
        name: '芦淞区',
        disabled: false,
        id: 430203
      },
      {
        name: '石峰区',
        disabled: false,
        id: 430204
      },
      {
        name: '天元区',
        disabled: false,
        id: 430211
      },
      {
        name: '渌口区',
        disabled: false,
        id: 430212
      },
      {
        name: '攸县',
        disabled: false,
        id: 430223
      },
      {
        name: '茶陵县',
        disabled: false,
        id: 430224
      },
      {
        name: '炎陵县',
        disabled: false,
        id: 430225
      },
      {
        name: '醴陵市',
        disabled: false,
        id: 430281
      }]
    },
    {
      name: '湘潭市',
      disabled: false,
      id: 430300,
      children: [{
        name: '雨湖区',
        disabled: false,
        id: 430302
      },
      {
        name: '岳塘区',
        disabled: false,
        id: 430304
      },
      {
        name: '湘潭县',
        disabled: false,
        id: 430321
      },
      {
        name: '湘乡市',
        disabled: false,
        id: 430381
      },
      {
        name: '韶山市',
        disabled: false,
        id: 430382
      }]
    },
    {
      name: '衡阳市',
      disabled: false,
      id: 430400,
      children: [{
        name: '珠晖区',
        disabled: false,
        id: 430405
      },
      {
        name: '雁峰区',
        disabled: false,
        id: 430406
      },
      {
        name: '石鼓区',
        disabled: false,
        id: 430407
      },
      {
        name: '蒸湘区',
        disabled: false,
        id: 430408
      },
      {
        name: '南岳区',
        disabled: false,
        id: 430412
      },
      {
        name: '衡阳县',
        disabled: false,
        id: 430421
      },
      {
        name: '衡南县',
        disabled: false,
        id: 430422
      },
      {
        name: '衡山县',
        disabled: false,
        id: 430423
      },
      {
        name: '衡东县',
        disabled: false,
        id: 430424
      },
      {
        name: '祁东县',
        disabled: false,
        id: 430426
      },
      {
        name: '耒阳市',
        disabled: false,
        id: 430481
      },
      {
        name: '常宁市',
        disabled: false,
        id: 430482
      }]
    },
    {
      name: '邵阳市',
      disabled: false,
      id: 430500,
      children: [{
        name: '双清区',
        disabled: false,
        id: 430502
      },
      {
        name: '大祥区',
        disabled: false,
        id: 430503
      },
      {
        name: '北塔区',
        disabled: false,
        id: 430511
      },
      {
        name: '邵东县',
        disabled: false,
        id: 430521
      },
      {
        name: '新邵县',
        disabled: false,
        id: 430522
      },
      {
        name: '邵阳县',
        disabled: false,
        id: 430523
      },
      {
        name: '隆回县',
        disabled: false,
        id: 430524
      },
      {
        name: '洞口县',
        disabled: false,
        id: 430525
      },
      {
        name: '绥宁县',
        disabled: false,
        id: 430527
      },
      {
        name: '新宁县',
        disabled: false,
        id: 430528
      },
      {
        name: '城步苗族自治县',
        disabled: false,
        id: 430529
      },
      {
        name: '武冈市',
        disabled: false,
        id: 430581
      }]
    },
    {
      name: '岳阳市',
      disabled: false,
      id: 430600,
      children: [{
        name: '岳阳楼区',
        disabled: false,
        id: 430602
      },
      {
        name: '云溪区',
        disabled: false,
        id: 430603
      },
      {
        name: '君山区',
        disabled: false,
        id: 430611
      },
      {
        name: '岳阳县',
        disabled: false,
        id: 430621
      },
      {
        name: '华容县',
        disabled: false,
        id: 430623
      },
      {
        name: '湘阴县',
        disabled: false,
        id: 430624
      },
      {
        name: '平江县',
        disabled: false,
        id: 430626
      },
      {
        name: '汨罗市',
        disabled: false,
        id: 430681
      },
      {
        name: '临湘市',
        disabled: false,
        id: 430682
      }]
    },
    {
      name: '常德市',
      disabled: false,
      id: 430700,
      children: [{
        name: '武陵区',
        disabled: false,
        id: 430702
      },
      {
        name: '鼎城区',
        disabled: false,
        id: 430703
      },
      {
        name: '安乡县',
        disabled: false,
        id: 430721
      },
      {
        name: '汉寿县',
        disabled: false,
        id: 430722
      },
      {
        name: '澧县',
        disabled: false,
        id: 430723
      },
      {
        name: '临澧县',
        disabled: false,
        id: 430724
      },
      {
        name: '桃源县',
        disabled: false,
        id: 430725
      },
      {
        name: '石门县',
        disabled: false,
        id: 430726
      },
      {
        name: '津市市',
        disabled: false,
        id: 430781
      }]
    },
    {
      name: '张家界市',
      disabled: false,
      id: 430800,
      children: [{
        name: '永定区',
        disabled: false,
        id: 430802
      },
      {
        name: '武陵源区',
        disabled: false,
        id: 430811
      },
      {
        name: '慈利县',
        disabled: false,
        id: 430821
      },
      {
        name: '桑植县',
        disabled: false,
        id: 430822
      }]
    },
    {
      name: '益阳市',
      disabled: false,
      id: 430900,
      children: [{
        name: '资阳区',
        disabled: false,
        id: 430902
      },
      {
        name: '赫山区',
        disabled: false,
        id: 430903
      },
      {
        name: '南县',
        disabled: false,
        id: 430921
      },
      {
        name: '桃江县',
        disabled: false,
        id: 430922
      },
      {
        name: '安化县',
        disabled: false,
        id: 430923
      },
      {
        name: '沅江市',
        disabled: false,
        id: 430981
      }]
    },
    {
      name: '郴州市',
      disabled: false,
      id: 431000,
      children: [{
        name: '北湖区',
        disabled: false,
        id: 431002
      },
      {
        name: '苏仙区',
        disabled: false,
        id: 431003
      },
      {
        name: '桂阳县',
        disabled: false,
        id: 431021
      },
      {
        name: '宜章县',
        disabled: false,
        id: 431022
      },
      {
        name: '永兴县',
        disabled: false,
        id: 431023
      },
      {
        name: '嘉禾县',
        disabled: false,
        id: 431024
      },
      {
        name: '临武县',
        disabled: false,
        id: 431025
      },
      {
        name: '汝城县',
        disabled: false,
        id: 431026
      },
      {
        name: '桂东县',
        disabled: false,
        id: 431027
      },
      {
        name: '安仁县',
        disabled: false,
        id: 431028
      },
      {
        name: '资兴市',
        disabled: false,
        id: 431081
      }]
    },
    {
      name: '永州市',
      disabled: false,
      id: 431100,
      children: [{
        name: '零陵区',
        disabled: false,
        id: 431102
      },
      {
        name: '冷水滩区',
        disabled: false,
        id: 431103
      },
      {
        name: '祁阳县',
        disabled: false,
        id: 431121
      },
      {
        name: '东安县',
        disabled: false,
        id: 431122
      },
      {
        name: '双牌县',
        disabled: false,
        id: 431123
      },
      {
        name: '道县',
        disabled: false,
        id: 431124
      },
      {
        name: '江永县',
        disabled: false,
        id: 431125
      },
      {
        name: '宁远县',
        disabled: false,
        id: 431126
      },
      {
        name: '蓝山县',
        disabled: false,
        id: 431127
      },
      {
        name: '新田县',
        disabled: false,
        id: 431128
      },
      {
        name: '江华瑶族自治县',
        disabled: false,
        id: 431129
      }]
    },
    {
      name: '怀化市',
      disabled: false,
      id: 431200,
      children: [{
        name: '鹤城区',
        disabled: false,
        id: 431202
      },
      {
        name: '中方县',
        disabled: false,
        id: 431221
      },
      {
        name: '沅陵县',
        disabled: false,
        id: 431222
      },
      {
        name: '辰溪县',
        disabled: false,
        id: 431223
      },
      {
        name: '溆浦县',
        disabled: false,
        id: 431224
      },
      {
        name: '会同县',
        disabled: false,
        id: 431225
      },
      {
        name: '麻阳苗族自治县',
        disabled: false,
        id: 431226
      },
      {
        name: '新晃侗族自治县',
        disabled: false,
        id: 431227
      },
      {
        name: '芷江侗族自治县',
        disabled: false,
        id: 431228
      },
      {
        name: '靖州苗族侗族自治县',
        disabled: false,
        id: 431229
      },
      {
        name: '通道侗族自治县',
        disabled: false,
        id: 431230
      },
      {
        name: '洪江市',
        disabled: false,
        id: 431281
      }]
    },
    {
      name: '娄底市',
      disabled: false,
      id: 431300,
      children: [{
        name: '娄星区',
        disabled: false,
        id: 431302
      },
      {
        name: '双峰县',
        disabled: false,
        id: 431321
      },
      {
        name: '新化县',
        disabled: false,
        id: 431322
      },
      {
        name: '冷水江市',
        disabled: false,
        id: 431381
      },
      {
        name: '涟源市',
        disabled: false,
        id: 431382
      }]
    },
    {
      name: '湘西土家族苗族自治州',
      disabled: false,
      id: 433100,
      children: [{
        name: '吉首市',
        disabled: false,
        id: 433101
      },
      {
        name: '泸溪县',
        disabled: false,
        id: 433122
      },
      {
        name: '凤凰县',
        disabled: false,
        id: 433123
      },
      {
        name: '花垣县',
        disabled: false,
        id: 433124
      },
      {
        name: '保靖县',
        disabled: false,
        id: 433125
      },
      {
        name: '古丈县',
        disabled: false,
        id: 433126
      },
      {
        name: '永顺县',
        disabled: false,
        id: 433127
      },
      {
        name: '龙山县',
        disabled: false,
        id: 433130
      }]
    }]
  },
  {
    name: '广西省',
    disabled: false,
    id: 450000,
    children: [{
      name: '南宁市',
      disabled: false,
      id: 450100,
      children: [{
        name: '兴宁区',
        disabled: false,
        id: 450102
      },
      {
        name: '青秀区',
        disabled: false,
        id: 450103
      },
      {
        name: '江南区',
        disabled: false,
        id: 450105
      },
      {
        name: '西乡塘区',
        disabled: false,
        id: 450107
      },
      {
        name: '良庆区',
        disabled: false,
        id: 450108
      },
      {
        name: '邕宁区',
        disabled: false,
        id: 450109
      },
      {
        name: '武鸣区',
        disabled: false,
        id: 450110
      },
      {
        name: '隆安县',
        disabled: false,
        id: 450123
      },
      {
        name: '马山县',
        disabled: false,
        id: 450124
      },
      {
        name: '上林县',
        disabled: false,
        id: 450125
      },
      {
        name: '宾阳县',
        disabled: false,
        id: 450126
      },
      {
        name: '横县',
        disabled: false,
        id: 450127
      }]
    },
    {
      name: '柳州市',
      disabled: false,
      id: 450200,
      children: [{
        name: '城中区',
        disabled: false,
        id: 450202
      },
      {
        name: '鱼峰区',
        disabled: false,
        id: 450203
      },
      {
        name: '柳南区',
        disabled: false,
        id: 450204
      },
      {
        name: '柳北区',
        disabled: false,
        id: 450205
      },
      {
        name: '柳江区',
        disabled: false,
        id: 450206
      },
      {
        name: '柳城县',
        disabled: false,
        id: 450222
      },
      {
        name: '鹿寨县',
        disabled: false,
        id: 450223
      },
      {
        name: '融安县',
        disabled: false,
        id: 450224
      },
      {
        name: '融水苗族自治县',
        disabled: false,
        id: 450225
      },
      {
        name: '三江侗族自治县',
        disabled: false,
        id: 450226
      }]
    },
    {
      name: '桂林市',
      disabled: false,
      id: 450300,
      children: [{
        name: '秀峰区',
        disabled: false,
        id: 450302
      },
      {
        name: '叠彩区',
        disabled: false,
        id: 450303
      },
      {
        name: '象山区',
        disabled: false,
        id: 450304
      },
      {
        name: '七星区',
        disabled: false,
        id: 450305
      },
      {
        name: '雁山区',
        disabled: false,
        id: 450311
      },
      {
        name: '临桂区',
        disabled: false,
        id: 450312
      },
      {
        name: '阳朔县',
        disabled: false,
        id: 450321
      },
      {
        name: '灵川县',
        disabled: false,
        id: 450323
      },
      {
        name: '全州县',
        disabled: false,
        id: 450324
      },
      {
        name: '兴安县',
        disabled: false,
        id: 450325
      },
      {
        name: '永福县',
        disabled: false,
        id: 450326
      },
      {
        name: '灌阳县',
        disabled: false,
        id: 450327
      },
      {
        name: '龙胜各族自治县',
        disabled: false,
        id: 450328
      },
      {
        name: '资源县',
        disabled: false,
        id: 450329
      },
      {
        name: '平乐县',
        disabled: false,
        id: 450330
      },
      {
        name: '恭城瑶族自治县',
        disabled: false,
        id: 450332
      },
      {
        name: '荔浦市',
        disabled: false,
        id: 450381
      }]
    },
    {
      name: '梧州市',
      disabled: false,
      id: 450400,
      children: [{
        name: '万秀区',
        disabled: false,
        id: 450403
      },
      {
        name: '长洲区',
        disabled: false,
        id: 450405
      },
      {
        name: '龙圩区',
        disabled: false,
        id: 450406
      },
      {
        name: '苍梧县',
        disabled: false,
        id: 450421
      },
      {
        name: '藤县',
        disabled: false,
        id: 450422
      },
      {
        name: '蒙山县',
        disabled: false,
        id: 450423
      },
      {
        name: '岑溪市',
        disabled: false,
        id: 450481
      }]
    },
    {
      name: '北海市',
      disabled: false,
      id: 450500,
      children: [{
        name: '海城区',
        disabled: false,
        id: 450502
      },
      {
        name: '银海区',
        disabled: false,
        id: 450503
      },
      {
        name: '铁山港区',
        disabled: false,
        id: 450512
      },
      {
        name: '合浦县',
        disabled: false,
        id: 450521
      }]
    },
    {
      name: '防城港市',
      disabled: false,
      id: 450600,
      children: [{
        name: '港口区',
        disabled: false,
        id: 450602
      },
      {
        name: '防城区',
        disabled: false,
        id: 450603
      },
      {
        name: '上思县',
        disabled: false,
        id: 450621
      },
      {
        name: '东兴市',
        disabled: false,
        id: 450681
      }]
    },
    {
      name: '钦州市',
      disabled: false,
      id: 450700,
      children: [{
        name: '钦南区',
        disabled: false,
        id: 450702
      },
      {
        name: '钦北区',
        disabled: false,
        id: 450703
      },
      {
        name: '灵山县',
        disabled: false,
        id: 450721
      },
      {
        name: '浦北县',
        disabled: false,
        id: 450722
      }]
    },
    {
      name: '贵港市',
      disabled: false,
      id: 450800,
      children: [{
        name: '港北区',
        disabled: false,
        id: 450802
      },
      {
        name: '港南区',
        disabled: false,
        id: 450803
      },
      {
        name: '覃塘区',
        disabled: false,
        id: 450804
      },
      {
        name: '平南县',
        disabled: false,
        id: 450821
      },
      {
        name: '桂平市',
        disabled: false,
        id: 450881
      }]
    },
    {
      name: '玉林市',
      disabled: false,
      id: 450900,
      children: [{
        name: '玉州区',
        disabled: false,
        id: 450902
      },
      {
        name: '福绵区',
        disabled: false,
        id: 450903
      },
      {
        name: '容县',
        disabled: false,
        id: 450921
      },
      {
        name: '陆川县',
        disabled: false,
        id: 450922
      },
      {
        name: '博白县',
        disabled: false,
        id: 450923
      },
      {
        name: '兴业县',
        disabled: false,
        id: 450924
      },
      {
        name: '北流市',
        disabled: false,
        id: 450981
      }]
    },
    {
      name: '百色市',
      disabled: false,
      id: 451000,
      children: [{
        name: '右江区',
        disabled: false,
        id: 451002
      },
      {
        name: '田阳县',
        disabled: false,
        id: 451021
      },
      {
        name: '田东县',
        disabled: false,
        id: 451022
      },
      {
        name: '平果县',
        disabled: false,
        id: 451023
      },
      {
        name: '德保县',
        disabled: false,
        id: 451024
      },
      {
        name: '那坡县',
        disabled: false,
        id: 451026
      },
      {
        name: '凌云县',
        disabled: false,
        id: 451027
      },
      {
        name: '乐业县',
        disabled: false,
        id: 451028
      },
      {
        name: '田林县',
        disabled: false,
        id: 451029
      },
      {
        name: '西林县',
        disabled: false,
        id: 451030
      },
      {
        name: '隆林各族自治县',
        disabled: false,
        id: 451031
      },
      {
        name: '靖西市',
        disabled: false,
        id: 451081
      }]
    },
    {
      name: '贺州市',
      disabled: false,
      id: 451100,
      children: [{
        name: '八步区',
        disabled: false,
        id: 451102
      },
      {
        name: '平桂区',
        disabled: false,
        id: 451103
      },
      {
        name: '昭平县',
        disabled: false,
        id: 451121
      },
      {
        name: '钟山县',
        disabled: false,
        id: 451122
      },
      {
        name: '富川瑶族自治县',
        disabled: false,
        id: 451123
      }]
    },
    {
      name: '河池市',
      disabled: false,
      id: 451200,
      children: [{
        name: '金城江区',
        disabled: false,
        id: 451202
      },
      {
        name: '宜州区',
        disabled: false,
        id: 451203
      },
      {
        name: '南丹县',
        disabled: false,
        id: 451221
      },
      {
        name: '天峨县',
        disabled: false,
        id: 451222
      },
      {
        name: '凤山县',
        disabled: false,
        id: 451223
      },
      {
        name: '东兰县',
        disabled: false,
        id: 451224
      },
      {
        name: '罗城仫佬族自治县',
        disabled: false,
        id: 451225
      },
      {
        name: '环江毛南族自治县',
        disabled: false,
        id: 451226
      },
      {
        name: '巴马瑶族自治县',
        disabled: false,
        id: 451227
      },
      {
        name: '都安瑶族自治县',
        disabled: false,
        id: 451228
      },
      {
        name: '大化瑶族自治县',
        disabled: false,
        id: 451229
      }]
    },
    {
      name: '来宾市',
      disabled: false,
      id: 451300,
      children: [{
        name: '兴宾区',
        disabled: false,
        id: 451302
      },
      {
        name: '忻城县',
        disabled: false,
        id: 451321
      },
      {
        name: '象州县',
        disabled: false,
        id: 451322
      },
      {
        name: '武宣县',
        disabled: false,
        id: 451323
      },
      {
        name: '金秀瑶族自治县',
        disabled: false,
        id: 451324
      },
      {
        name: '合山市',
        disabled: false,
        id: 451381
      }]
    },
    {
      name: '崇左市',
      disabled: false,
      id: 451400,
      children: [{
        name: '江州区',
        disabled: false,
        id: 451402
      },
      {
        name: '扶绥县',
        disabled: false,
        id: 451421
      },
      {
        name: '宁明县',
        disabled: false,
        id: 451422
      },
      {
        name: '龙州县',
        disabled: false,
        id: 451423
      },
      {
        name: '大新县',
        disabled: false,
        id: 451424
      },
      {
        name: '天等县',
        disabled: false,
        id: 451425
      },
      {
        name: '凭祥市',
        disabled: false,
        id: 451481
      }]
    }]
  },
  {
    name: '海南省',
    disabled: false,
    id: 460000,
    children: [{
      name: '海口市',
      disabled: false,
      id: 460100,
      children: [{
        name: '秀英区',
        disabled: false,
        id: 460105
      },
      {
        name: '龙华区',
        disabled: false,
        id: 460106
      },
      {
        name: '琼山区',
        disabled: false,
        id: 460107
      },
      {
        name: '美兰区',
        disabled: false,
        id: 460108
      }]
    },
    {
      name: '三亚市',
      disabled: false,
      id: 460200,
      children: [{
        name: '海棠区',
        disabled: false,
        id: 460202
      },
      {
        name: '吉阳区',
        disabled: false,
        id: 460203
      },
      {
        name: '天涯区',
        disabled: false,
        id: 460204
      },
      {
        name: '崖州区',
        disabled: false,
        id: 460205
      }]
    },
    {
      name: '三沙市',
      disabled: false,
      id: 460300,
      children: [{
        name: '西沙群岛',
        disabled: false,
        id: 460321
      },
      {
        name: '南沙群岛',
        disabled: false,
        id: 460322
      },
      {
        name: '中沙群岛的岛礁及其海域',
        disabled: false,
        id: 460323
      }]
    },
    {
      name: '儋州市',
      disabled: false,
      id: 460400,
      children: [{
        name: '那大镇',
        disabled: false,
        id: 460401
      },
      {
        name: '和庆镇',
        disabled: false,
        id: 460402
      },
      {
        name: '南丰镇',
        disabled: false,
        id: 460403
      },
      {
        name: '大成镇',
        disabled: false,
        id: 460404
      },
      {
        name: '雅星镇',
        disabled: false,
        id: 460405
      },
      {
        name: '兰洋镇',
        disabled: false,
        id: 460406
      },
      {
        name: '光村镇',
        disabled: false,
        id: 460407
      },
      {
        name: '木棠镇',
        disabled: false,
        id: 460408
      },
      {
        name: '海头镇',
        disabled: false,
        id: 460409
      },
      {
        name: '峨蔓镇',
        disabled: false,
        id: 460410
      },
      {
        name: '王五镇',
        disabled: false,
        id: 460411
      },
      {
        name: '白马井镇',
        disabled: false,
        id: 460412
      },
      {
        name: '中和镇',
        disabled: false,
        id: 460413
      },
      {
        name: '排浦镇',
        disabled: false,
        id: 460414
      },
      {
        name: '东成镇',
        disabled: false,
        id: 460415
      },
      {
        name: '新州镇',
        disabled: false,
        id: 460416
      },
      {
        name: '洋浦经济开发区',
        disabled: false,
        id: 460417
      },
      {
        name: '华南热作学院',
        disabled: false,
        id: 460418
      }]
    },
    {
      name: '省直辖县',
      disabled: false,
      id: 469000,
      children: [{
        name: '五指山市',
        disabled: false,
        id: 469001
      },
      {
        name: '琼海市',
        disabled: false,
        id: 469002
      },
      {
        name: '文昌市',
        disabled: false,
        id: 469005
      },
      {
        name: '万宁市',
        disabled: false,
        id: 469006
      },
      {
        name: '东方市',
        disabled: false,
        id: 469007
      },
      {
        name: '定安县',
        disabled: false,
        id: 469021
      },
      {
        name: '屯昌县',
        disabled: false,
        id: 469022
      },
      {
        name: '澄迈县',
        disabled: false,
        id: 469023
      },
      {
        name: '临高县',
        disabled: false,
        id: 469024
      },
      {
        name: '白沙黎族自治县',
        disabled: false,
        id: 469025
      },
      {
        name: '昌江黎族自治县',
        disabled: false,
        id: 469026
      },
      {
        name: '乐东黎族自治县',
        disabled: false,
        id: 469027
      },
      {
        name: '陵水黎族自治县',
        disabled: false,
        id: 469028
      },
      {
        name: '保亭黎族苗族自治县',
        disabled: false,
        id: 469029
      },
      {
        name: '琼中黎族苗族自治县',
        disabled: false,
        id: 469030
      }]
    }]
  },
  {
    name: '重庆市',
    disabled: false,
    id: 500000,
    children: [{
      name: '重庆市',
      disabled: false,
      id: 500100,
      children: [{
        name: '万州区',
        disabled: false,
        id: 500101
      },
      {
        name: '涪陵区',
        disabled: false,
        id: 500102
      },
      {
        name: '渝中区',
        disabled: false,
        id: 500103
      },
      {
        name: '大渡口区',
        disabled: false,
        id: 500104
      },
      {
        name: '江北区',
        disabled: false,
        id: 500105
      },
      {
        name: '沙坪坝区',
        disabled: false,
        id: 500106
      },
      {
        name: '九龙坡区',
        disabled: false,
        id: 500107
      },
      {
        name: '南岸区',
        disabled: false,
        id: 500108
      },
      {
        name: '北碚区',
        disabled: false,
        id: 500109
      },
      {
        name: '綦江区',
        disabled: false,
        id: 500110
      },
      {
        name: '大足区',
        disabled: false,
        id: 500111
      },
      {
        name: '渝北区',
        disabled: false,
        id: 500112
      },
      {
        name: '巴南区',
        disabled: false,
        id: 500113
      },
      {
        name: '黔江区',
        disabled: false,
        id: 500114
      },
      {
        name: '长寿区',
        disabled: false,
        id: 500115
      },
      {
        name: '江津区',
        disabled: false,
        id: 500116
      },
      {
        name: '合川区',
        disabled: false,
        id: 500117
      },
      {
        name: '永川区',
        disabled: false,
        id: 500118
      },
      {
        name: '南川区',
        disabled: false,
        id: 500119
      },
      {
        name: '璧山区',
        disabled: false,
        id: 500120
      },
      {
        name: '铜梁区',
        disabled: false,
        id: 500151
      },
      {
        name: '潼南区',
        disabled: false,
        id: 500152
      },
      {
        name: '荣昌区',
        disabled: false,
        id: 500153
      },
      {
        name: '开州区',
        disabled: false,
        id: 500154
      },
      {
        name: '梁平区',
        disabled: false,
        id: 500155
      },
      {
        name: '武隆区',
        disabled: false,
        id: 500156
      }]
    },
    {
      name: '县',
      disabled: false,
      id: 500200,
      children: [{
        name: '城口县',
        disabled: false,
        id: 500229
      },
      {
        name: '丰都县',
        disabled: false,
        id: 500230
      },
      {
        name: '垫江县',
        disabled: false,
        id: 500231
      },
      {
        name: '忠县',
        disabled: false,
        id: 500233
      },
      {
        name: '云阳县',
        disabled: false,
        id: 500235
      },
      {
        name: '奉节县',
        disabled: false,
        id: 500236
      },
      {
        name: '巫山县',
        disabled: false,
        id: 500237
      },
      {
        name: '巫溪县',
        disabled: false,
        id: 500238
      },
      {
        name: '石柱土家族自治县',
        disabled: false,
        id: 500240
      },
      {
        name: '秀山土家族苗族自治县',
        disabled: false,
        id: 500241
      },
      {
        name: '酉阳土家族苗族自治县',
        disabled: false,
        id: 500242
      },
      {
        name: '彭水苗族土家族自治县',
        disabled: false,
        id: 500243
      }]
    }]
  },
  {
    name: '四川省',
    disabled: false,
    id: 510000,
    children: [{
      name: '成都市',
      disabled: false,
      id: 510100,
      children: [{
        name: '锦江区',
        disabled: false,
        id: 510104
      },
      {
        name: '青羊区',
        disabled: false,
        id: 510105
      },
      {
        name: '金牛区',
        disabled: false,
        id: 510106
      },
      {
        name: '武侯区',
        disabled: false,
        id: 510107
      },
      {
        name: '成华区',
        disabled: false,
        id: 510108
      },
      {
        name: '龙泉驿区',
        disabled: false,
        id: 510112
      },
      {
        name: '青白江区',
        disabled: false,
        id: 510113
      },
      {
        name: '新都区',
        disabled: false,
        id: 510114
      },
      {
        name: '温江区',
        disabled: false,
        id: 510115
      },
      {
        name: '双流区',
        disabled: false,
        id: 510116
      },
      {
        name: '郫都区',
        disabled: false,
        id: 510117
      },
      {
        name: '金堂县',
        disabled: false,
        id: 510121
      },
      {
        name: '大邑县',
        disabled: false,
        id: 510129
      },
      {
        name: '蒲江县',
        disabled: false,
        id: 510131
      },
      {
        name: '新津县',
        disabled: false,
        id: 510132
      },
      {
        name: '都江堰市',
        disabled: false,
        id: 510181
      },
      {
        name: '彭州市',
        disabled: false,
        id: 510182
      },
      {
        name: '邛崃市',
        disabled: false,
        id: 510183
      },
      {
        name: '崇州市',
        disabled: false,
        id: 510184
      },
      {
        name: '简阳市',
        disabled: false,
        id: 510185
      },
      {
        name: '高新区',
        disabled: false,
        id: 510191
      }]
    },
    {
      name: '自贡市',
      disabled: false,
      id: 510300,
      children: [{
        name: '自流井区',
        disabled: false,
        id: 510302
      },
      {
        name: '贡井区',
        disabled: false,
        id: 510303
      },
      {
        name: '大安区',
        disabled: false,
        id: 510304
      },
      {
        name: '沿滩区',
        disabled: false,
        id: 510311
      },
      {
        name: '荣县',
        disabled: false,
        id: 510321
      },
      {
        name: '富顺县',
        disabled: false,
        id: 510322
      }]
    },
    {
      name: '攀枝花市',
      disabled: false,
      id: 510400,
      children: [{
        name: '东区',
        disabled: false,
        id: 510402
      },
      {
        name: '西区',
        disabled: false,
        id: 510403
      },
      {
        name: '仁和区',
        disabled: false,
        id: 510411
      },
      {
        name: '米易县',
        disabled: false,
        id: 510421
      },
      {
        name: '盐边县',
        disabled: false,
        id: 510422
      }]
    },
    {
      name: '泸州市',
      disabled: false,
      id: 510500,
      children: [{
        name: '江阳区',
        disabled: false,
        id: 510502
      },
      {
        name: '纳溪区',
        disabled: false,
        id: 510503
      },
      {
        name: '龙马潭区',
        disabled: false,
        id: 510504
      },
      {
        name: '泸县',
        disabled: false,
        id: 510521
      },
      {
        name: '合江县',
        disabled: false,
        id: 510522
      },
      {
        name: '叙永县',
        disabled: false,
        id: 510524
      },
      {
        name: '古蔺县',
        disabled: false,
        id: 510525
      }]
    },
    {
      name: '德阳市',
      disabled: false,
      id: 510600,
      children: [{
        name: '旌阳区',
        disabled: false,
        id: 510603
      },
      {
        name: '罗江区',
        disabled: false,
        id: 510604
      },
      {
        name: '中江县',
        disabled: false,
        id: 510623
      },
      {
        name: '广汉市',
        disabled: false,
        id: 510681
      },
      {
        name: '什邡市',
        disabled: false,
        id: 510682
      },
      {
        name: '绵竹市',
        disabled: false,
        id: 510683
      }]
    },
    {
      name: '绵阳市',
      disabled: false,
      id: 510700,
      children: [{
        name: '涪城区',
        disabled: false,
        id: 510703
      },
      {
        name: '游仙区',
        disabled: false,
        id: 510704
      },
      {
        name: '安州区',
        disabled: false,
        id: 510705
      },
      {
        name: '三台县',
        disabled: false,
        id: 510722
      },
      {
        name: '盐亭县',
        disabled: false,
        id: 510723
      },
      {
        name: '梓潼县',
        disabled: false,
        id: 510725
      },
      {
        name: '北川羌族自治县',
        disabled: false,
        id: 510726
      },
      {
        name: '平武县',
        disabled: false,
        id: 510727
      },
      {
        name: '江油市',
        disabled: false,
        id: 510781
      },
      {
        name: '高新区',
        disabled: false,
        id: 510791
      }]
    },
    {
      name: '广元市',
      disabled: false,
      id: 510800,
      children: [{
        name: '利州区',
        disabled: false,
        id: 510802
      },
      {
        name: '昭化区',
        disabled: false,
        id: 510811
      },
      {
        name: '朝天区',
        disabled: false,
        id: 510812
      },
      {
        name: '旺苍县',
        disabled: false,
        id: 510821
      },
      {
        name: '青川县',
        disabled: false,
        id: 510822
      },
      {
        name: '剑阁县',
        disabled: false,
        id: 510823
      },
      {
        name: '苍溪县',
        disabled: false,
        id: 510824
      }]
    },
    {
      name: '遂宁市',
      disabled: false,
      id: 510900,
      children: [{
        name: '船山区',
        disabled: false,
        id: 510903
      },
      {
        name: '安居区',
        disabled: false,
        id: 510904
      },
      {
        name: '蓬溪县',
        disabled: false,
        id: 510921
      },
      {
        name: '射洪县',
        disabled: false,
        id: 510922
      },
      {
        name: '大英县',
        disabled: false,
        id: 510923
      }]
    },
    {
      name: '内江市',
      disabled: false,
      id: 511000,
      children: [{
        name: '市中区',
        disabled: false,
        id: 511002
      },
      {
        name: '东兴区',
        disabled: false,
        id: 511011
      },
      {
        name: '威远县',
        disabled: false,
        id: 511024
      },
      {
        name: '资中县',
        disabled: false,
        id: 511025
      },
      {
        name: '隆昌市',
        disabled: false,
        id: 511083
      }]
    },
    {
      name: '乐山市',
      disabled: false,
      id: 511100,
      children: [{
        name: '市中区',
        disabled: false,
        id: 511102
      },
      {
        name: '沙湾区',
        disabled: false,
        id: 511111
      },
      {
        name: '五通桥区',
        disabled: false,
        id: 511112
      },
      {
        name: '金口河区',
        disabled: false,
        id: 511113
      },
      {
        name: '犍为县',
        disabled: false,
        id: 511123
      },
      {
        name: '井研县',
        disabled: false,
        id: 511124
      },
      {
        name: '夹江县',
        disabled: false,
        id: 511126
      },
      {
        name: '沐川县',
        disabled: false,
        id: 511129
      },
      {
        name: '峨边彝族自治县',
        disabled: false,
        id: 511132
      },
      {
        name: '马边彝族自治县',
        disabled: false,
        id: 511133
      },
      {
        name: '峨眉山市',
        disabled: false,
        id: 511181
      }]
    },
    {
      name: '南充市',
      disabled: false,
      id: 511300,
      children: [{
        name: '顺庆区',
        disabled: false,
        id: 511302
      },
      {
        name: '高坪区',
        disabled: false,
        id: 511303
      },
      {
        name: '嘉陵区',
        disabled: false,
        id: 511304
      },
      {
        name: '南部县',
        disabled: false,
        id: 511321
      },
      {
        name: '营山县',
        disabled: false,
        id: 511322
      },
      {
        name: '蓬安县',
        disabled: false,
        id: 511323
      },
      {
        name: '仪陇县',
        disabled: false,
        id: 511324
      },
      {
        name: '西充县',
        disabled: false,
        id: 511325
      },
      {
        name: '阆中市',
        disabled: false,
        id: 511381
      }]
    },
    {
      name: '眉山市',
      disabled: false,
      id: 511400,
      children: [{
        name: '东坡区',
        disabled: false,
        id: 511402
      },
      {
        name: '彭山区',
        disabled: false,
        id: 511403
      },
      {
        name: '仁寿县',
        disabled: false,
        id: 511421
      },
      {
        name: '洪雅县',
        disabled: false,
        id: 511423
      },
      {
        name: '丹棱县',
        disabled: false,
        id: 511424
      },
      {
        name: '青神县',
        disabled: false,
        id: 511425
      }]
    },
    {
      name: '宜宾市',
      disabled: false,
      id: 511500,
      children: [{
        name: '翠屏区',
        disabled: false,
        id: 511502
      },
      {
        name: '南溪区',
        disabled: false,
        id: 511503
      },
      {
        name: '叙州区',
        disabled: false,
        id: 511504
      },
      {
        name: '江安县',
        disabled: false,
        id: 511523
      },
      {
        name: '长宁县',
        disabled: false,
        id: 511524
      },
      {
        name: '高县',
        disabled: false,
        id: 511525
      },
      {
        name: '珙县',
        disabled: false,
        id: 511526
      },
      {
        name: '筠连县',
        disabled: false,
        id: 511527
      },
      {
        name: '兴文县',
        disabled: false,
        id: 511528
      },
      {
        name: '屏山县',
        disabled: false,
        id: 511529
      }]
    },
    {
      name: '广安市',
      disabled: false,
      id: 511600,
      children: [{
        name: '广安区',
        disabled: false,
        id: 511602
      },
      {
        name: '前锋区',
        disabled: false,
        id: 511603
      },
      {
        name: '岳池县',
        disabled: false,
        id: 511621
      },
      {
        name: '武胜县',
        disabled: false,
        id: 511622
      },
      {
        name: '邻水县',
        disabled: false,
        id: 511623
      },
      {
        name: '华蓥市',
        disabled: false,
        id: 511681
      }]
    },
    {
      name: '达州市',
      disabled: false,
      id: 511700,
      children: [{
        name: '通川区',
        disabled: false,
        id: 511702
      },
      {
        name: '达川区',
        disabled: false,
        id: 511703
      },
      {
        name: '宣汉县',
        disabled: false,
        id: 511722
      },
      {
        name: '开江县',
        disabled: false,
        id: 511723
      },
      {
        name: '大竹县',
        disabled: false,
        id: 511724
      },
      {
        name: '渠县',
        disabled: false,
        id: 511725
      },
      {
        name: '万源市',
        disabled: false,
        id: 511781
      }]
    },
    {
      name: '雅安市',
      disabled: false,
      id: 511800,
      children: [{
        name: '雨城区',
        disabled: false,
        id: 511802
      },
      {
        name: '名山区',
        disabled: false,
        id: 511803
      },
      {
        name: '荥经县',
        disabled: false,
        id: 511822
      },
      {
        name: '汉源县',
        disabled: false,
        id: 511823
      },
      {
        name: '石棉县',
        disabled: false,
        id: 511824
      },
      {
        name: '天全县',
        disabled: false,
        id: 511825
      },
      {
        name: '芦山县',
        disabled: false,
        id: 511826
      },
      {
        name: '宝兴县',
        disabled: false,
        id: 511827
      }]
    },
    {
      name: '巴中市',
      disabled: false,
      id: 511900,
      children: [{
        name: '巴州区',
        disabled: false,
        id: 511902
      },
      {
        name: '恩阳区',
        disabled: false,
        id: 511903
      },
      {
        name: '通江县',
        disabled: false,
        id: 511921
      },
      {
        name: '南江县',
        disabled: false,
        id: 511922
      },
      {
        name: '平昌县',
        disabled: false,
        id: 511923
      }]
    },
    {
      name: '资阳市',
      disabled: false,
      id: 512000,
      children: [{
        name: '雁江区',
        disabled: false,
        id: 512002
      },
      {
        name: '安岳县',
        disabled: false,
        id: 512021
      },
      {
        name: '乐至县',
        disabled: false,
        id: 512022
      }]
    },
    {
      name: '阿坝藏族羌族自治州',
      disabled: false,
      id: 513200,
      children: [{
        name: '马尔康市',
        disabled: false,
        id: 513201
      },
      {
        name: '汶川县',
        disabled: false,
        id: 513221
      },
      {
        name: '理县',
        disabled: false,
        id: 513222
      },
      {
        name: '茂县',
        disabled: false,
        id: 513223
      },
      {
        name: '松潘县',
        disabled: false,
        id: 513224
      },
      {
        name: '九寨沟县',
        disabled: false,
        id: 513225
      },
      {
        name: '金川县',
        disabled: false,
        id: 513226
      },
      {
        name: '小金县',
        disabled: false,
        id: 513227
      },
      {
        name: '黑水县',
        disabled: false,
        id: 513228
      },
      {
        name: '壤塘县',
        disabled: false,
        id: 513230
      },
      {
        name: '阿坝县',
        disabled: false,
        id: 513231
      },
      {
        name: '若尔盖县',
        disabled: false,
        id: 513232
      },
      {
        name: '红原县',
        disabled: false,
        id: 513233
      }]
    },
    {
      name: '甘孜藏族自治州',
      disabled: false,
      id: 513300,
      children: [{
        name: '康定市',
        disabled: false,
        id: 513301
      },
      {
        name: '泸定县',
        disabled: false,
        id: 513322
      },
      {
        name: '丹巴县',
        disabled: false,
        id: 513323
      },
      {
        name: '九龙县',
        disabled: false,
        id: 513324
      },
      {
        name: '雅江县',
        disabled: false,
        id: 513325
      },
      {
        name: '道孚县',
        disabled: false,
        id: 513326
      },
      {
        name: '炉霍县',
        disabled: false,
        id: 513327
      },
      {
        name: '甘孜县',
        disabled: false,
        id: 513328
      },
      {
        name: '新龙县',
        disabled: false,
        id: 513329
      },
      {
        name: '德格县',
        disabled: false,
        id: 513330
      },
      {
        name: '白玉县',
        disabled: false,
        id: 513331
      },
      {
        name: '石渠县',
        disabled: false,
        id: 513332
      },
      {
        name: '色达县',
        disabled: false,
        id: 513333
      },
      {
        name: '理塘县',
        disabled: false,
        id: 513334
      },
      {
        name: '巴塘县',
        disabled: false,
        id: 513335
      },
      {
        name: '乡城县',
        disabled: false,
        id: 513336
      },
      {
        name: '稻城县',
        disabled: false,
        id: 513337
      },
      {
        name: '得荣县',
        disabled: false,
        id: 513338
      }]
    },
    {
      name: '凉山彝族自治州',
      disabled: false,
      id: 513400,
      children: [{
        name: '西昌市',
        disabled: false,
        id: 513401
      },
      {
        name: '木里藏族自治县',
        disabled: false,
        id: 513422
      },
      {
        name: '盐源县',
        disabled: false,
        id: 513423
      },
      {
        name: '德昌县',
        disabled: false,
        id: 513424
      },
      {
        name: '会理县',
        disabled: false,
        id: 513425
      },
      {
        name: '会东县',
        disabled: false,
        id: 513426
      },
      {
        name: '宁南县',
        disabled: false,
        id: 513427
      },
      {
        name: '普格县',
        disabled: false,
        id: 513428
      },
      {
        name: '布拖县',
        disabled: false,
        id: 513429
      },
      {
        name: '金阳县',
        disabled: false,
        id: 513430
      },
      {
        name: '昭觉县',
        disabled: false,
        id: 513431
      },
      {
        name: '喜德县',
        disabled: false,
        id: 513432
      },
      {
        name: '冕宁县',
        disabled: false,
        id: 513433
      },
      {
        name: '越西县',
        disabled: false,
        id: 513434
      },
      {
        name: '甘洛县',
        disabled: false,
        id: 513435
      },
      {
        name: '美姑县',
        disabled: false,
        id: 513436
      },
      {
        name: '雷波县',
        disabled: false,
        id: 513437
      }]
    }]
  },
  {
    name: '贵州省',
    disabled: false,
    id: 520000,
    children: [{
      name: '贵阳市',
      disabled: false,
      id: 520100,
      children: [{
        name: '南明区',
        disabled: false,
        id: 520102
      },
      {
        name: '云岩区',
        disabled: false,
        id: 520103
      },
      {
        name: '花溪区',
        disabled: false,
        id: 520111
      },
      {
        name: '乌当区',
        disabled: false,
        id: 520112
      },
      {
        name: '白云区',
        disabled: false,
        id: 520113
      },
      {
        name: '观山湖区',
        disabled: false,
        id: 520115
      },
      {
        name: '开阳县',
        disabled: false,
        id: 520121
      },
      {
        name: '息烽县',
        disabled: false,
        id: 520122
      },
      {
        name: '修文县',
        disabled: false,
        id: 520123
      },
      {
        name: '清镇市',
        disabled: false,
        id: 520181
      }]
    },
    {
      name: '六盘水市',
      disabled: false,
      id: 520200,
      children: [{
        name: '钟山区',
        disabled: false,
        id: 520201
      },
      {
        name: '六枝特区',
        disabled: false,
        id: 520203
      },
      {
        name: '水城县',
        disabled: false,
        id: 520221
      },
      {
        name: '盘州市',
        disabled: false,
        id: 520281
      }]
    },
    {
      name: '遵义市',
      disabled: false,
      id: 520300,
      children: [{
        name: '红花岗区',
        disabled: false,
        id: 520302
      },
      {
        name: '汇川区',
        disabled: false,
        id: 520303
      },
      {
        name: '播州区',
        disabled: false,
        id: 520304
      },
      {
        name: '桐梓县',
        disabled: false,
        id: 520322
      },
      {
        name: '绥阳县',
        disabled: false,
        id: 520323
      },
      {
        name: '正安县',
        disabled: false,
        id: 520324
      },
      {
        name: '道真仡佬族苗族自治县',
        disabled: false,
        id: 520325
      },
      {
        name: '务川仡佬族苗族自治县',
        disabled: false,
        id: 520326
      },
      {
        name: '凤冈县',
        disabled: false,
        id: 520327
      },
      {
        name: '湄潭县',
        disabled: false,
        id: 520328
      },
      {
        name: '余庆县',
        disabled: false,
        id: 520329
      },
      {
        name: '习水县',
        disabled: false,
        id: 520330
      },
      {
        name: '赤水市',
        disabled: false,
        id: 520381
      },
      {
        name: '仁怀市',
        disabled: false,
        id: 520382
      }]
    },
    {
      name: '安顺市',
      disabled: false,
      id: 520400,
      children: [{
        name: '西秀区',
        disabled: false,
        id: 520402
      },
      {
        name: '平坝区',
        disabled: false,
        id: 520403
      },
      {
        name: '普定县',
        disabled: false,
        id: 520422
      },
      {
        name: '镇宁布依族苗族自治县',
        disabled: false,
        id: 520423
      },
      {
        name: '关岭布依族苗族自治县',
        disabled: false,
        id: 520424
      },
      {
        name: '紫云苗族布依族自治县',
        disabled: false,
        id: 520425
      }]
    },
    {
      name: '毕节市',
      disabled: false,
      id: 520500,
      children: [{
        name: '七星关区',
        disabled: false,
        id: 520502
      },
      {
        name: '大方县',
        disabled: false,
        id: 520521
      },
      {
        name: '黔西县',
        disabled: false,
        id: 520522
      },
      {
        name: '金沙县',
        disabled: false,
        id: 520523
      },
      {
        name: '织金县',
        disabled: false,
        id: 520524
      },
      {
        name: '纳雍县',
        disabled: false,
        id: 520525
      },
      {
        name: '威宁彝族回族苗族自治县',
        disabled: false,
        id: 520526
      },
      {
        name: '赫章县',
        disabled: false,
        id: 520527
      }]
    },
    {
      name: '铜仁市',
      disabled: false,
      id: 520600,
      children: [{
        name: '碧江区',
        disabled: false,
        id: 520602
      },
      {
        name: '万山区',
        disabled: false,
        id: 520603
      },
      {
        name: '江口县',
        disabled: false,
        id: 520621
      },
      {
        name: '玉屏侗族自治县',
        disabled: false,
        id: 520622
      },
      {
        name: '石阡县',
        disabled: false,
        id: 520623
      },
      {
        name: '思南县',
        disabled: false,
        id: 520624
      },
      {
        name: '印江土家族苗族自治县',
        disabled: false,
        id: 520625
      },
      {
        name: '德江县',
        disabled: false,
        id: 520626
      },
      {
        name: '沿河土家族自治县',
        disabled: false,
        id: 520627
      },
      {
        name: '松桃苗族自治县',
        disabled: false,
        id: 520628
      }]
    },
    {
      name: '黔西南布依族苗族自治州',
      disabled: false,
      id: 522300,
      children: [{
        name: '兴义市',
        disabled: false,
        id: 522301
      },
      {
        name: '兴仁市',
        disabled: false,
        id: 522302
      },
      {
        name: '普安县',
        disabled: false,
        id: 522323
      },
      {
        name: '晴隆县',
        disabled: false,
        id: 522324
      },
      {
        name: '贞丰县',
        disabled: false,
        id: 522325
      },
      {
        name: '望谟县',
        disabled: false,
        id: 522326
      },
      {
        name: '册亨县',
        disabled: false,
        id: 522327
      },
      {
        name: '安龙县',
        disabled: false,
        id: 522328
      }]
    },
    {
      name: '黔东南苗族侗族自治州',
      disabled: false,
      id: 522600,
      children: [{
        name: '凯里市',
        disabled: false,
        id: 522601
      },
      {
        name: '黄平县',
        disabled: false,
        id: 522622
      },
      {
        name: '施秉县',
        disabled: false,
        id: 522623
      },
      {
        name: '三穗县',
        disabled: false,
        id: 522624
      },
      {
        name: '镇远县',
        disabled: false,
        id: 522625
      },
      {
        name: '岑巩县',
        disabled: false,
        id: 522626
      },
      {
        name: '天柱县',
        disabled: false,
        id: 522627
      },
      {
        name: '锦屏县',
        disabled: false,
        id: 522628
      },
      {
        name: '剑河县',
        disabled: false,
        id: 522629
      },
      {
        name: '台江县',
        disabled: false,
        id: 522630
      },
      {
        name: '黎平县',
        disabled: false,
        id: 522631
      },
      {
        name: '榕江县',
        disabled: false,
        id: 522632
      },
      {
        name: '从江县',
        disabled: false,
        id: 522633
      },
      {
        name: '雷山县',
        disabled: false,
        id: 522634
      },
      {
        name: '麻江县',
        disabled: false,
        id: 522635
      },
      {
        name: '丹寨县',
        disabled: false,
        id: 522636
      }]
    },
    {
      name: '黔南布依族苗族自治州',
      disabled: false,
      id: 522700,
      children: [{
        name: '都匀市',
        disabled: false,
        id: 522701
      },
      {
        name: '福泉市',
        disabled: false,
        id: 522702
      },
      {
        name: '荔波县',
        disabled: false,
        id: 522722
      },
      {
        name: '贵定县',
        disabled: false,
        id: 522723
      },
      {
        name: '瓮安县',
        disabled: false,
        id: 522725
      },
      {
        name: '独山县',
        disabled: false,
        id: 522726
      },
      {
        name: '平塘县',
        disabled: false,
        id: 522727
      },
      {
        name: '罗甸县',
        disabled: false,
        id: 522728
      },
      {
        name: '长顺县',
        disabled: false,
        id: 522729
      },
      {
        name: '龙里县',
        disabled: false,
        id: 522730
      },
      {
        name: '惠水县',
        disabled: false,
        id: 522731
      },
      {
        name: '三都水族自治县',
        disabled: false,
        id: 522732
      }]
    }]
  },
  {
    name: '云南省',
    disabled: false,
    id: 530000,
    children: [{
      name: '昆明市',
      disabled: false,
      id: 530100,
      children: [{
        name: '五华区',
        disabled: false,
        id: 530102
      },
      {
        name: '盘龙区',
        disabled: false,
        id: 530103
      },
      {
        name: '官渡区',
        disabled: false,
        id: 530111
      },
      {
        name: '西山区',
        disabled: false,
        id: 530112
      },
      {
        name: '东川区',
        disabled: false,
        id: 530113
      },
      {
        name: '呈贡区',
        disabled: false,
        id: 530114
      },
      {
        name: '晋宁区',
        disabled: false,
        id: 530115
      },
      {
        name: '富民县',
        disabled: false,
        id: 530124
      },
      {
        name: '宜良县',
        disabled: false,
        id: 530125
      },
      {
        name: '石林彝族自治县',
        disabled: false,
        id: 530126
      },
      {
        name: '嵩明县',
        disabled: false,
        id: 530127
      },
      {
        name: '禄劝彝族苗族自治县',
        disabled: false,
        id: 530128
      },
      {
        name: '寻甸回族彝族自治县',
        disabled: false,
        id: 530129
      },
      {
        name: '安宁市',
        disabled: false,
        id: 530181
      }]
    },
    {
      name: '曲靖市',
      disabled: false,
      id: 530300,
      children: [{
        name: '麒麟区',
        disabled: false,
        id: 530302
      },
      {
        name: '沾益区',
        disabled: false,
        id: 530303
      },
      {
        name: '马龙区',
        disabled: false,
        id: 530304
      },
      {
        name: '陆良县',
        disabled: false,
        id: 530322
      },
      {
        name: '师宗县',
        disabled: false,
        id: 530323
      },
      {
        name: '罗平县',
        disabled: false,
        id: 530324
      },
      {
        name: '富源县',
        disabled: false,
        id: 530325
      },
      {
        name: '会泽县',
        disabled: false,
        id: 530326
      },
      {
        name: '宣威市',
        disabled: false,
        id: 530381
      }]
    },
    {
      name: '玉溪市',
      disabled: false,
      id: 530400,
      children: [{
        name: '红塔区',
        disabled: false,
        id: 530402
      },
      {
        name: '江川区',
        disabled: false,
        id: 530403
      },
      {
        name: '澄江县',
        disabled: false,
        id: 530422
      },
      {
        name: '通海县',
        disabled: false,
        id: 530423
      },
      {
        name: '华宁县',
        disabled: false,
        id: 530424
      },
      {
        name: '易门县',
        disabled: false,
        id: 530425
      },
      {
        name: '峨山彝族自治县',
        disabled: false,
        id: 530426
      },
      {
        name: '新平彝族傣族自治县',
        disabled: false,
        id: 530427
      },
      {
        name: '元江哈尼族彝族傣族自治县',
        disabled: false,
        id: 530428
      }]
    },
    {
      name: '保山市',
      disabled: false,
      id: 530500,
      children: [{
        name: '隆阳区',
        disabled: false,
        id: 530502
      },
      {
        name: '施甸县',
        disabled: false,
        id: 530521
      },
      {
        name: '龙陵县',
        disabled: false,
        id: 530523
      },
      {
        name: '昌宁县',
        disabled: false,
        id: 530524
      },
      {
        name: '腾冲市',
        disabled: false,
        id: 530581
      }]
    },
    {
      name: '昭通市',
      disabled: false,
      id: 530600,
      children: [{
        name: '昭阳区',
        disabled: false,
        id: 530602
      },
      {
        name: '鲁甸县',
        disabled: false,
        id: 530621
      },
      {
        name: '巧家县',
        disabled: false,
        id: 530622
      },
      {
        name: '盐津县',
        disabled: false,
        id: 530623
      },
      {
        name: '大关县',
        disabled: false,
        id: 530624
      },
      {
        name: '永善县',
        disabled: false,
        id: 530625
      },
      {
        name: '绥江县',
        disabled: false,
        id: 530626
      },
      {
        name: '镇雄县',
        disabled: false,
        id: 530627
      },
      {
        name: '彝良县',
        disabled: false,
        id: 530628
      },
      {
        name: '威信县',
        disabled: false,
        id: 530629
      },
      {
        name: '水富市',
        disabled: false,
        id: 530681
      }]
    },
    {
      name: '丽江市',
      disabled: false,
      id: 530700,
      children: [{
        name: '古城区',
        disabled: false,
        id: 530702
      },
      {
        name: '玉龙纳西族自治县',
        disabled: false,
        id: 530721
      },
      {
        name: '永胜县',
        disabled: false,
        id: 530722
      },
      {
        name: '华坪县',
        disabled: false,
        id: 530723
      },
      {
        name: '宁蒗彝族自治县',
        disabled: false,
        id: 530724
      }]
    },
    {
      name: '普洱市',
      disabled: false,
      id: 530800,
      children: [{
        name: '思茅区',
        disabled: false,
        id: 530802
      },
      {
        name: '宁洱哈尼族彝族自治县',
        disabled: false,
        id: 530821
      },
      {
        name: '墨江哈尼族自治县',
        disabled: false,
        id: 530822
      },
      {
        name: '景东彝族自治县',
        disabled: false,
        id: 530823
      },
      {
        name: '景谷傣族彝族自治县',
        disabled: false,
        id: 530824
      },
      {
        name: '镇沅彝族哈尼族拉祜族自治县',
        disabled: false,
        id: 530825
      },
      {
        name: '江城哈尼族彝族自治县',
        disabled: false,
        id: 530826
      },
      {
        name: '孟连傣族拉祜族佤族自治县',
        disabled: false,
        id: 530827
      },
      {
        name: '澜沧拉祜族自治县',
        disabled: false,
        id: 530828
      },
      {
        name: '西盟佤族自治县',
        disabled: false,
        id: 530829
      }]
    },
    {
      name: '临沧市',
      disabled: false,
      id: 530900,
      children: [{
        name: '临翔区',
        disabled: false,
        id: 530902
      },
      {
        name: '凤庆县',
        disabled: false,
        id: 530921
      },
      {
        name: '云县',
        disabled: false,
        id: 530922
      },
      {
        name: '永德县',
        disabled: false,
        id: 530923
      },
      {
        name: '镇康县',
        disabled: false,
        id: 530924
      },
      {
        name: '双江拉祜族佤族布朗族傣族自治县',
        disabled: false,
        id: 530925
      },
      {
        name: '耿马傣族佤族自治县',
        disabled: false,
        id: 530926
      },
      {
        name: '沧源佤族自治县',
        disabled: false,
        id: 530927
      }]
    },
    {
      name: '楚雄彝族自治州',
      disabled: false,
      id: 532300,
      children: [{
        name: '楚雄市',
        disabled: false,
        id: 532301
      },
      {
        name: '双柏县',
        disabled: false,
        id: 532322
      },
      {
        name: '牟定县',
        disabled: false,
        id: 532323
      },
      {
        name: '南华县',
        disabled: false,
        id: 532324
      },
      {
        name: '姚安县',
        disabled: false,
        id: 532325
      },
      {
        name: '大姚县',
        disabled: false,
        id: 532326
      },
      {
        name: '永仁县',
        disabled: false,
        id: 532327
      },
      {
        name: '元谋县',
        disabled: false,
        id: 532328
      },
      {
        name: '武定县',
        disabled: false,
        id: 532329
      },
      {
        name: '禄丰县',
        disabled: false,
        id: 532331
      }]
    },
    {
      name: '红河哈尼族彝族自治州',
      disabled: false,
      id: 532500,
      children: [{
        name: '个旧市',
        disabled: false,
        id: 532501
      },
      {
        name: '开远市',
        disabled: false,
        id: 532502
      },
      {
        name: '蒙自市',
        disabled: false,
        id: 532503
      },
      {
        name: '弥勒市',
        disabled: false,
        id: 532504
      },
      {
        name: '屏边苗族自治县',
        disabled: false,
        id: 532523
      },
      {
        name: '建水县',
        disabled: false,
        id: 532524
      },
      {
        name: '石屏县',
        disabled: false,
        id: 532525
      },
      {
        name: '泸西县',
        disabled: false,
        id: 532527
      },
      {
        name: '元阳县',
        disabled: false,
        id: 532528
      },
      {
        name: '红河县',
        disabled: false,
        id: 532529
      },
      {
        name: '金平苗族瑶族傣族自治县',
        disabled: false,
        id: 532530
      },
      {
        name: '绿春县',
        disabled: false,
        id: 532531
      },
      {
        name: '河口瑶族自治县',
        disabled: false,
        id: 532532
      }]
    },
    {
      name: '文山壮族苗族自治州',
      disabled: false,
      id: 532600,
      children: [{
        name: '文山市',
        disabled: false,
        id: 532601
      },
      {
        name: '砚山县',
        disabled: false,
        id: 532622
      },
      {
        name: '西畴县',
        disabled: false,
        id: 532623
      },
      {
        name: '麻栗坡县',
        disabled: false,
        id: 532624
      },
      {
        name: '马关县',
        disabled: false,
        id: 532625
      },
      {
        name: '丘北县',
        disabled: false,
        id: 532626
      },
      {
        name: '广南县',
        disabled: false,
        id: 532627
      },
      {
        name: '富宁县',
        disabled: false,
        id: 532628
      }]
    },
    {
      name: '西双版纳傣族自治州',
      disabled: false,
      id: 532800,
      children: [{
        name: '景洪市',
        disabled: false,
        id: 532801
      },
      {
        name: '勐海县',
        disabled: false,
        id: 532822
      },
      {
        name: '勐腊县',
        disabled: false,
        id: 532823
      }]
    },
    {
      name: '大理白族自治州',
      disabled: false,
      id: 532900,
      children: [{
        name: '大理市',
        disabled: false,
        id: 532901
      },
      {
        name: '漾濞彝族自治县',
        disabled: false,
        id: 532922
      },
      {
        name: '祥云县',
        disabled: false,
        id: 532923
      },
      {
        name: '宾川县',
        disabled: false,
        id: 532924
      },
      {
        name: '弥渡县',
        disabled: false,
        id: 532925
      },
      {
        name: '南涧彝族自治县',
        disabled: false,
        id: 532926
      },
      {
        name: '巍山彝族回族自治县',
        disabled: false,
        id: 532927
      },
      {
        name: '永平县',
        disabled: false,
        id: 532928
      },
      {
        name: '云龙县',
        disabled: false,
        id: 532929
      },
      {
        name: '洱源县',
        disabled: false,
        id: 532930
      },
      {
        name: '剑川县',
        disabled: false,
        id: 532931
      },
      {
        name: '鹤庆县',
        disabled: false,
        id: 532932
      }]
    },
    {
      name: '德宏傣族景颇族自治州',
      disabled: false,
      id: 533100,
      children: [{
        name: '瑞丽市',
        disabled: false,
        id: 533102
      },
      {
        name: '芒市',
        disabled: false,
        id: 533103
      },
      {
        name: '梁河县',
        disabled: false,
        id: 533122
      },
      {
        name: '盈江县',
        disabled: false,
        id: 533123
      },
      {
        name: '陇川县',
        disabled: false,
        id: 533124
      }]
    },
    {
      name: '怒江傈僳族自治州',
      disabled: false,
      id: 533300,
      children: [{
        name: '泸水市',
        disabled: false,
        id: 533301
      },
      {
        name: '福贡县',
        disabled: false,
        id: 533323
      },
      {
        name: '贡山独龙族怒族自治县',
        disabled: false,
        id: 533324
      },
      {
        name: '兰坪白族普米族自治县',
        disabled: false,
        id: 533325
      }]
    },
    {
      name: '迪庆藏族自治州',
      disabled: false,
      id: 533400,
      children: [{
        name: '香格里拉市',
        disabled: false,
        id: 533401
      },
      {
        name: '德钦县',
        disabled: false,
        id: 533422
      },
      {
        name: '维西傈僳族自治县',
        disabled: false,
        id: 533423
      }]
    }]
  },
  {
    name: '陕西省',
    disabled: false,
    id: 610000,
    children: [{
      name: '西安市',
      disabled: false,
      id: 610100,
      children: [{
        name: '新城区',
        disabled: false,
        id: 610102
      },
      {
        name: '碑林区',
        disabled: false,
        id: 610103
      },
      {
        name: '莲湖区',
        disabled: false,
        id: 610104
      },
      {
        name: '灞桥区',
        disabled: false,
        id: 610111
      },
      {
        name: '未央区',
        disabled: false,
        id: 610112
      },
      {
        name: '雁塔区',
        disabled: false,
        id: 610113
      },
      {
        name: '阎良区',
        disabled: false,
        id: 610114
      },
      {
        name: '临潼区',
        disabled: false,
        id: 610115
      },
      {
        name: '长安区',
        disabled: false,
        id: 610116
      },
      {
        name: '高陵区',
        disabled: false,
        id: 610117
      },
      {
        name: '鄠邑区',
        disabled: false,
        id: 610118
      },
      {
        name: '蓝田县',
        disabled: false,
        id: 610122
      },
      {
        name: '周至县',
        disabled: false,
        id: 610124
      }]
    },
    {
      name: '铜川市',
      disabled: false,
      id: 610200,
      children: [{
        name: '王益区',
        disabled: false,
        id: 610202
      },
      {
        name: '印台区',
        disabled: false,
        id: 610203
      },
      {
        name: '耀州区',
        disabled: false,
        id: 610204
      },
      {
        name: '宜君县',
        disabled: false,
        id: 610222
      }]
    },
    {
      name: '宝鸡市',
      disabled: false,
      id: 610300,
      children: [{
        name: '渭滨区',
        disabled: false,
        id: 610302
      },
      {
        name: '金台区',
        disabled: false,
        id: 610303
      },
      {
        name: '陈仓区',
        disabled: false,
        id: 610304
      },
      {
        name: '凤翔县',
        disabled: false,
        id: 610322
      },
      {
        name: '岐山县',
        disabled: false,
        id: 610323
      },
      {
        name: '扶风县',
        disabled: false,
        id: 610324
      },
      {
        name: '眉县',
        disabled: false,
        id: 610326
      },
      {
        name: '陇县',
        disabled: false,
        id: 610327
      },
      {
        name: '千阳县',
        disabled: false,
        id: 610328
      },
      {
        name: '麟游县',
        disabled: false,
        id: 610329
      },
      {
        name: '凤县',
        disabled: false,
        id: 610330
      },
      {
        name: '太白县',
        disabled: false,
        id: 610331
      }]
    },
    {
      name: '咸阳市',
      disabled: false,
      id: 610400,
      children: [{
        name: '秦都区',
        disabled: false,
        id: 610402
      },
      {
        name: '杨陵区',
        disabled: false,
        id: 610403
      },
      {
        name: '渭城区',
        disabled: false,
        id: 610404
      },
      {
        name: '三原县',
        disabled: false,
        id: 610422
      },
      {
        name: '泾阳县',
        disabled: false,
        id: 610423
      },
      {
        name: '乾县',
        disabled: false,
        id: 610424
      },
      {
        name: '礼泉县',
        disabled: false,
        id: 610425
      },
      {
        name: '永寿县',
        disabled: false,
        id: 610426
      },
      {
        name: '长武县',
        disabled: false,
        id: 610428
      },
      {
        name: '旬邑县',
        disabled: false,
        id: 610429
      },
      {
        name: '淳化县',
        disabled: false,
        id: 610430
      },
      {
        name: '武功县',
        disabled: false,
        id: 610431
      },
      {
        name: '兴平市',
        disabled: false,
        id: 610481
      },
      {
        name: '彬州市',
        disabled: false,
        id: 610482
      }]
    },
    {
      name: '渭南市',
      disabled: false,
      id: 610500,
      children: [{
        name: '临渭区',
        disabled: false,
        id: 610502
      },
      {
        name: '华州区',
        disabled: false,
        id: 610503
      },
      {
        name: '潼关县',
        disabled: false,
        id: 610522
      },
      {
        name: '大荔县',
        disabled: false,
        id: 610523
      },
      {
        name: '合阳县',
        disabled: false,
        id: 610524
      },
      {
        name: '澄城县',
        disabled: false,
        id: 610525
      },
      {
        name: '蒲城县',
        disabled: false,
        id: 610526
      },
      {
        name: '白水县',
        disabled: false,
        id: 610527
      },
      {
        name: '富平县',
        disabled: false,
        id: 610528
      },
      {
        name: '韩城市',
        disabled: false,
        id: 610581
      },
      {
        name: '华阴市',
        disabled: false,
        id: 610582
      }]
    },
    {
      name: '延安市',
      disabled: false,
      id: 610600,
      children: [{
        name: '宝塔区',
        disabled: false,
        id: 610602
      },
      {
        name: '安塞区',
        disabled: false,
        id: 610603
      },
      {
        name: '延长县',
        disabled: false,
        id: 610621
      },
      {
        name: '延川县',
        disabled: false,
        id: 610622
      },
      {
        name: '子长县',
        disabled: false,
        id: 610623
      },
      {
        name: '志丹县',
        disabled: false,
        id: 610625
      },
      {
        name: '吴起县',
        disabled: false,
        id: 610626
      },
      {
        name: '甘泉县',
        disabled: false,
        id: 610627
      },
      {
        name: '富县',
        disabled: false,
        id: 610628
      },
      {
        name: '洛川县',
        disabled: false,
        id: 610629
      },
      {
        name: '宜川县',
        disabled: false,
        id: 610630
      },
      {
        name: '黄龙县',
        disabled: false,
        id: 610631
      },
      {
        name: '黄陵县',
        disabled: false,
        id: 610632
      }]
    },
    {
      name: '汉中市',
      disabled: false,
      id: 610700,
      children: [{
        name: '汉台区',
        disabled: false,
        id: 610702
      },
      {
        name: '南郑区',
        disabled: false,
        id: 610703
      },
      {
        name: '城固县',
        disabled: false,
        id: 610722
      },
      {
        name: '洋县',
        disabled: false,
        id: 610723
      },
      {
        name: '西乡县',
        disabled: false,
        id: 610724
      },
      {
        name: '勉县',
        disabled: false,
        id: 610725
      },
      {
        name: '宁强县',
        disabled: false,
        id: 610726
      },
      {
        name: '略阳县',
        disabled: false,
        id: 610727
      },
      {
        name: '镇巴县',
        disabled: false,
        id: 610728
      },
      {
        name: '留坝县',
        disabled: false,
        id: 610729
      },
      {
        name: '佛坪县',
        disabled: false,
        id: 610730
      }]
    },
    {
      name: '榆林市',
      disabled: false,
      id: 610800,
      children: [{
        name: '榆阳区',
        disabled: false,
        id: 610802
      },
      {
        name: '横山区',
        disabled: false,
        id: 610803
      },
      {
        name: '府谷县',
        disabled: false,
        id: 610822
      },
      {
        name: '靖边县',
        disabled: false,
        id: 610824
      },
      {
        name: '定边县',
        disabled: false,
        id: 610825
      },
      {
        name: '绥德县',
        disabled: false,
        id: 610826
      },
      {
        name: '米脂县',
        disabled: false,
        id: 610827
      },
      {
        name: '佳县',
        disabled: false,
        id: 610828
      },
      {
        name: '吴堡县',
        disabled: false,
        id: 610829
      },
      {
        name: '清涧县',
        disabled: false,
        id: 610830
      },
      {
        name: '子洲县',
        disabled: false,
        id: 610831
      },
      {
        name: '神木市',
        disabled: false,
        id: 610881
      }]
    },
    {
      name: '安康市',
      disabled: false,
      id: 610900,
      children: [{
        name: '汉滨区',
        disabled: false,
        id: 610902
      },
      {
        name: '汉阴县',
        disabled: false,
        id: 610921
      },
      {
        name: '石泉县',
        disabled: false,
        id: 610922
      },
      {
        name: '宁陕县',
        disabled: false,
        id: 610923
      },
      {
        name: '紫阳县',
        disabled: false,
        id: 610924
      },
      {
        name: '岚皋县',
        disabled: false,
        id: 610925
      },
      {
        name: '平利县',
        disabled: false,
        id: 610926
      },
      {
        name: '镇坪县',
        disabled: false,
        id: 610927
      },
      {
        name: '旬阳县',
        disabled: false,
        id: 610928
      },
      {
        name: '白河县',
        disabled: false,
        id: 610929
      }]
    },
    {
      name: '商洛市',
      disabled: false,
      id: 611000,
      children: [{
        name: '商州区',
        disabled: false,
        id: 611002
      },
      {
        name: '洛南县',
        disabled: false,
        id: 611021
      },
      {
        name: '丹凤县',
        disabled: false,
        id: 611022
      },
      {
        name: '商南县',
        disabled: false,
        id: 611023
      },
      {
        name: '山阳县',
        disabled: false,
        id: 611024
      },
      {
        name: '镇安县',
        disabled: false,
        id: 611025
      },
      {
        name: '柞水县',
        disabled: false,
        id: 611026
      }]
    }]
  },
  {
    name: '甘肃省',
    disabled: false,
    id: 620000,
    children: [{
      name: '兰州市',
      disabled: false,
      id: 620100,
      children: [{
        name: '城关区',
        disabled: false,
        id: 620102
      },
      {
        name: '七里河区',
        disabled: false,
        id: 620103
      },
      {
        name: '西固区',
        disabled: false,
        id: 620104
      },
      {
        name: '安宁区',
        disabled: false,
        id: 620105
      },
      {
        name: '红古区',
        disabled: false,
        id: 620111
      },
      {
        name: '永登县',
        disabled: false,
        id: 620121
      },
      {
        name: '皋兰县',
        disabled: false,
        id: 620122
      },
      {
        name: '榆中县',
        disabled: false,
        id: 620123
      }]
    },
    {
      name: '嘉峪关市',
      disabled: false,
      id: 620200,
      children: [{
        name: '市辖区',
        disabled: false,
        id: 620201
      },
      {
        name: '雄关区',
        disabled: false,
        id: 620290
      },
      {
        name: '长城区',
        disabled: false,
        id: 620291
      },
      {
        name: '镜铁区',
        disabled: false,
        id: 620292
      },
      {
        name: '新城镇',
        disabled: false,
        id: 620293
      },
      {
        name: '峪泉镇',
        disabled: false,
        id: 620294
      },
      {
        name: '文殊镇',
        disabled: false,
        id: 620295
      }]
    },
    {
      name: '金昌市',
      disabled: false,
      id: 620300,
      children: [{
        name: '金川区',
        disabled: false,
        id: 620302
      },
      {
        name: '永昌县',
        disabled: false,
        id: 620321
      }]
    },
    {
      name: '白银市',
      disabled: false,
      id: 620400,
      children: [{
        name: '白银区',
        disabled: false,
        id: 620402
      },
      {
        name: '平川区',
        disabled: false,
        id: 620403
      },
      {
        name: '靖远县',
        disabled: false,
        id: 620421
      },
      {
        name: '会宁县',
        disabled: false,
        id: 620422
      },
      {
        name: '景泰县',
        disabled: false,
        id: 620423
      }]
    },
    {
      name: '天水市',
      disabled: false,
      id: 620500,
      children: [{
        name: '秦州区',
        disabled: false,
        id: 620502
      },
      {
        name: '麦积区',
        disabled: false,
        id: 620503
      },
      {
        name: '清水县',
        disabled: false,
        id: 620521
      },
      {
        name: '秦安县',
        disabled: false,
        id: 620522
      },
      {
        name: '甘谷县',
        disabled: false,
        id: 620523
      },
      {
        name: '武山县',
        disabled: false,
        id: 620524
      },
      {
        name: '张家川回族自治县',
        disabled: false,
        id: 620525
      }]
    },
    {
      name: '武威市',
      disabled: false,
      id: 620600,
      children: [{
        name: '凉州区',
        disabled: false,
        id: 620602
      },
      {
        name: '民勤县',
        disabled: false,
        id: 620621
      },
      {
        name: '古浪县',
        disabled: false,
        id: 620622
      },
      {
        name: '天祝藏族自治县',
        disabled: false,
        id: 620623
      }]
    },
    {
      name: '张掖市',
      disabled: false,
      id: 620700,
      children: [{
        name: '甘州区',
        disabled: false,
        id: 620702
      },
      {
        name: '肃南裕固族自治县',
        disabled: false,
        id: 620721
      },
      {
        name: '民乐县',
        disabled: false,
        id: 620722
      },
      {
        name: '临泽县',
        disabled: false,
        id: 620723
      },
      {
        name: '高台县',
        disabled: false,
        id: 620724
      },
      {
        name: '山丹县',
        disabled: false,
        id: 620725
      }]
    },
    {
      name: '平凉市',
      disabled: false,
      id: 620800,
      children: [{
        name: '崆峒区',
        disabled: false,
        id: 620802
      },
      {
        name: '泾川县',
        disabled: false,
        id: 620821
      },
      {
        name: '灵台县',
        disabled: false,
        id: 620822
      },
      {
        name: '崇信县',
        disabled: false,
        id: 620823
      },
      {
        name: '庄浪县',
        disabled: false,
        id: 620825
      },
      {
        name: '静宁县',
        disabled: false,
        id: 620826
      },
      {
        name: '华亭市',
        disabled: false,
        id: 620881
      }]
    },
    {
      name: '酒泉市',
      disabled: false,
      id: 620900,
      children: [{
        name: '肃州区',
        disabled: false,
        id: 620902
      },
      {
        name: '金塔县',
        disabled: false,
        id: 620921
      },
      {
        name: '瓜州县',
        disabled: false,
        id: 620922
      },
      {
        name: '肃北蒙古族自治县',
        disabled: false,
        id: 620923
      },
      {
        name: '阿克塞哈萨克族自治县',
        disabled: false,
        id: 620924
      },
      {
        name: '玉门市',
        disabled: false,
        id: 620981
      },
      {
        name: '敦煌市',
        disabled: false,
        id: 620982
      }]
    },
    {
      name: '庆阳市',
      disabled: false,
      id: 621000,
      children: [{
        name: '西峰区',
        disabled: false,
        id: 621002
      },
      {
        name: '庆城县',
        disabled: false,
        id: 621021
      },
      {
        name: '环县',
        disabled: false,
        id: 621022
      },
      {
        name: '华池县',
        disabled: false,
        id: 621023
      },
      {
        name: '合水县',
        disabled: false,
        id: 621024
      },
      {
        name: '正宁县',
        disabled: false,
        id: 621025
      },
      {
        name: '宁县',
        disabled: false,
        id: 621026
      },
      {
        name: '镇原县',
        disabled: false,
        id: 621027
      }]
    },
    {
      name: '定西市',
      disabled: false,
      id: 621100,
      children: [{
        name: '安定区',
        disabled: false,
        id: 621102
      },
      {
        name: '通渭县',
        disabled: false,
        id: 621121
      },
      {
        name: '陇西县',
        disabled: false,
        id: 621122
      },
      {
        name: '渭源县',
        disabled: false,
        id: 621123
      },
      {
        name: '临洮县',
        disabled: false,
        id: 621124
      },
      {
        name: '漳县',
        disabled: false,
        id: 621125
      },
      {
        name: '岷县',
        disabled: false,
        id: 621126
      }]
    },
    {
      name: '陇南市',
      disabled: false,
      id: 621200,
      children: [{
        name: '武都区',
        disabled: false,
        id: 621202
      },
      {
        name: '成县',
        disabled: false,
        id: 621221
      },
      {
        name: '文县',
        disabled: false,
        id: 621222
      },
      {
        name: '宕昌县',
        disabled: false,
        id: 621223
      },
      {
        name: '康县',
        disabled: false,
        id: 621224
      },
      {
        name: '西和县',
        disabled: false,
        id: 621225
      },
      {
        name: '礼县',
        disabled: false,
        id: 621226
      },
      {
        name: '徽县',
        disabled: false,
        id: 621227
      },
      {
        name: '两当县',
        disabled: false,
        id: 621228
      }]
    },
    {
      name: '临夏回族自治州',
      disabled: false,
      id: 622900,
      children: [{
        name: '临夏市',
        disabled: false,
        id: 622901
      },
      {
        name: '临夏县',
        disabled: false,
        id: 622921
      },
      {
        name: '康乐县',
        disabled: false,
        id: 622922
      },
      {
        name: '永靖县',
        disabled: false,
        id: 622923
      },
      {
        name: '广河县',
        disabled: false,
        id: 622924
      },
      {
        name: '和政县',
        disabled: false,
        id: 622925
      },
      {
        name: '东乡族自治县',
        disabled: false,
        id: 622926
      },
      {
        name: '积石山保安族东乡族撒拉族自治县',
        disabled: false,
        id: 622927
      }]
    },
    {
      name: '甘南藏族自治州',
      disabled: false,
      id: 623000,
      children: [{
        name: '合作市',
        disabled: false,
        id: 623001
      },
      {
        name: '临潭县',
        disabled: false,
        id: 623021
      },
      {
        name: '卓尼县',
        disabled: false,
        id: 623022
      },
      {
        name: '舟曲县',
        disabled: false,
        id: 623023
      },
      {
        name: '迭部县',
        disabled: false,
        id: 623024
      },
      {
        name: '玛曲县',
        disabled: false,
        id: 623025
      },
      {
        name: '碌曲县',
        disabled: false,
        id: 623026
      },
      {
        name: '夏河县',
        disabled: false,
        id: 623027
      }]
    }]
  },
  {
    name: '青海省',
    disabled: false,
    id: 630000,
    children: [{
      name: '西宁市',
      disabled: false,
      id: 630100,
      children: [{
        name: '城东区',
        disabled: false,
        id: 630102
      },
      {
        name: '城中区',
        disabled: false,
        id: 630103
      },
      {
        name: '城西区',
        disabled: false,
        id: 630104
      },
      {
        name: '城北区',
        disabled: false,
        id: 630105
      },
      {
        name: '大通回族土族自治县',
        disabled: false,
        id: 630121
      },
      {
        name: '湟中县',
        disabled: false,
        id: 630122
      },
      {
        name: '湟源县',
        disabled: false,
        id: 630123
      }]
    },
    {
      name: '海东市',
      disabled: false,
      id: 630200,
      children: [{
        name: '乐都区',
        disabled: false,
        id: 630202
      },
      {
        name: '平安区',
        disabled: false,
        id: 630203
      },
      {
        name: '民和回族土族自治县',
        disabled: false,
        id: 630222
      },
      {
        name: '互助土族自治县',
        disabled: false,
        id: 630223
      },
      {
        name: '化隆回族自治县',
        disabled: false,
        id: 630224
      },
      {
        name: '循化撒拉族自治县',
        disabled: false,
        id: 630225
      }]
    },
    {
      name: '海北藏族自治州',
      disabled: false,
      id: 632200,
      children: [{
        name: '门源回族自治县',
        disabled: false,
        id: 632221
      },
      {
        name: '祁连县',
        disabled: false,
        id: 632222
      },
      {
        name: '海晏县',
        disabled: false,
        id: 632223
      },
      {
        name: '刚察县',
        disabled: false,
        id: 632224
      }]
    },
    {
      name: '黄南藏族自治州',
      disabled: false,
      id: 632300,
      children: [{
        name: '同仁县',
        disabled: false,
        id: 632321
      },
      {
        name: '尖扎县',
        disabled: false,
        id: 632322
      },
      {
        name: '泽库县',
        disabled: false,
        id: 632323
      },
      {
        name: '河南蒙古族自治县',
        disabled: false,
        id: 632324
      }]
    },
    {
      name: '海南藏族自治州',
      disabled: false,
      id: 632500,
      children: [{
        name: '共和县',
        disabled: false,
        id: 632521
      },
      {
        name: '同德县',
        disabled: false,
        id: 632522
      },
      {
        name: '贵德县',
        disabled: false,
        id: 632523
      },
      {
        name: '兴海县',
        disabled: false,
        id: 632524
      },
      {
        name: '贵南县',
        disabled: false,
        id: 632525
      }]
    },
    {
      name: '果洛藏族自治州',
      disabled: false,
      id: 632600,
      children: [{
        name: '玛沁县',
        disabled: false,
        id: 632621
      },
      {
        name: '班玛县',
        disabled: false,
        id: 632622
      },
      {
        name: '甘德县',
        disabled: false,
        id: 632623
      },
      {
        name: '达日县',
        disabled: false,
        id: 632624
      },
      {
        name: '久治县',
        disabled: false,
        id: 632625
      },
      {
        name: '玛多县',
        disabled: false,
        id: 632626
      }]
    },
    {
      name: '玉树藏族自治州',
      disabled: false,
      id: 632700,
      children: [{
        name: '玉树市',
        disabled: false,
        id: 632701
      },
      {
        name: '杂多县',
        disabled: false,
        id: 632722
      },
      {
        name: '称多县',
        disabled: false,
        id: 632723
      },
      {
        name: '治多县',
        disabled: false,
        id: 632724
      },
      {
        name: '囊谦县',
        disabled: false,
        id: 632725
      },
      {
        name: '曲麻莱县',
        disabled: false,
        id: 632726
      }]
    },
    {
      name: '海西蒙古族藏族自治州',
      disabled: false,
      id: 632800,
      children: [{
        name: '格尔木市',
        disabled: false,
        id: 632801
      },
      {
        name: '德令哈市',
        disabled: false,
        id: 632802
      },
      {
        name: '茫崖市',
        disabled: false,
        id: 632803
      },
      {
        name: '乌兰县',
        disabled: false,
        id: 632821
      },
      {
        name: '都兰县',
        disabled: false,
        id: 632822
      },
      {
        name: '天峻县',
        disabled: false,
        id: 632823
      }]
    }]
  }]

export default areaOptions
