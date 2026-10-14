/* Các diễn giải dưới đây phục vụ học tập theo đáp án người dùng cung cấp. */
const EXACT={
0:['Chỉ nghiên cứu lịch sử các cuộc chiến tranh và không nghiên cứu công tác an ninh.','Chỉ nghiên cứu kỹ thuật sử dụng vũ khí, không nghiên cứu đường lối quân sự.','Chỉ nghiên cứu quan hệ kinh tế quốc tế và quản trị doanh nghiệp.'],
1:['Chủ nghĩa duy tâm và thuyết định mệnh.','Chỉ dựa vào kinh nghiệm cá nhân, không cần cơ sở lý luận.','Chỉ dựa vào học thuyết quân sự nước ngoài, không vận dụng tư tưởng Hồ Chí Minh.'],
2:['Chỉ tiếp cận trực giác, không cần kiểm nghiệm thực tiễn.','Tách các sự kiện khỏi bối cảnh lịch sử và mối quan hệ hệ thống.','Chỉ học thuộc kết luận, không phân tích logic hay thực tiễn.'],
3:['Chỉ nghiên cứu lý thuyết, loại bỏ khảo sát và thực hành.','Chỉ thực hành thao tác, không nghiên cứu cơ sở lý luận.','Chỉ học thuộc đáp án, không kết hợp phương pháp nghiên cứu.'],
10:['Công tác quốc phòng - an ninh.','Quân sự chung.','Kỹ năng chiến đấu bộ binh và chiến thuật.'],
11:['Đường lối quốc phòng và an ninh của Đảng Cộng sản Việt Nam.','Quân sự chung.','Kỹ năng chiến đấu bộ binh và chiến thuật.'],
12:['Đường lối quốc phòng và an ninh của Đảng Cộng sản Việt Nam.','Công tác quốc phòng - an ninh.','Kỹ năng chiến đấu bộ binh và chiến thuật.'],
13:['Đường lối quốc phòng và an ninh của Đảng Cộng sản Việt Nam.','Công tác quốc phòng - an ninh.','Quân sự chung.'],
22:['3 tín chỉ.','4 tín chỉ.','5 tín chỉ.'],23:['1 tín chỉ.','3 tín chỉ.','5 tín chỉ.'],
25:['Bản năng hiếu chiến bẩm sinh của mọi con người.','Sự khác nhau về thời tiết và khí hậu giữa các vùng.','Sự tồn tại của xã hội loài người, kể cả khi chưa phân chia giai cấp.'],
32:['Chỉ quân đội, công dân khác không có trách nhiệm.','Chỉ lực lượng công an, không liên quan đến nhân dân.','Chỉ cán bộ nhà nước, không phải nghĩa vụ của người dân.'],
39:['Một hiện tượng tự nhiên vĩnh viễn, không phụ thuộc xã hội.','Một hiện tượng sinh học do bản năng con người quyết định.','Một hiện tượng ngẫu nhiên, không liên quan chính trị và lịch sử.'],
40:['Sự khác biệt ngôn ngữ giữa các cộng đồng.','Sự ra đời của công cụ lao động bằng kim loại.','Chế độ công hữu không có giai cấp đối kháng.'],
41:['Văn hóa.','Tôn giáo.','Địa lý.'],
42:['Chiến tranh quyết định hoàn toàn chính trị; chính trị không có vai trò chi phối.','Chiến tranh và chính trị độc lập, không liên hệ với nhau.','Chiến tranh chỉ là hoạt động kỹ thuật, không phục vụ mục tiêu chính trị.'],
46:['Con bạch tuộc một vòi.','Con rắn hai đầu.','Con chim hai cánh.'],
49:['Toàn bộ nhân loại, không mang bản chất giai cấp.','Một tổ chức kinh tế tư nhân độc lập với nhà nước.','Mọi giai cấp cùng lãnh đạo ngang nhau, không có giai cấp thống trị.'],
50:['Sở thích cá nhân của từng quân nhân.','Chỉ kiểu dáng quân phục.','Chỉ thời tiết của khu vực đóng quân.'],
51:['Chỉ tăng số lượng vũ khí, không cần giáo dục chính trị.','Chỉ tăng quân số, không cần xây dựng tư tưởng.','Chỉ tăng ngân sách, không cần giáo dục chính trị và tư tưởng.'],
53:['Quy luật cung cầu kinh tế.','Nguyên tắc phân chia địa giới hành chính.','Quy luật biến đổi khí hậu.'],
55:['Chỉ quân số, vũ khí và doanh trại.','Chỉ thể lực, tuổi đời và sức khỏe.','Chỉ trang phục, phù hiệu và cấp bậc.'],
56:['Chỉ quân đội, công dân khác không có trách nhiệm.','Chỉ công an, không liên quan đến nhân dân.','Chỉ người đứng đầu nhà nước, không liên quan công dân khác.'],
57:['Chỉ số lượng quân nhân, không phụ thuộc tinh thần.','Chỉ mức độ hiện đại của vũ khí, không phụ thuộc chính trị.','Chỉ diện tích lãnh thổ, không phụ thuộc con người.'],
58:['Giai cấp tư sản.','Giai cấp địa chủ.','Không mang bản chất giai cấp nào.'],
61:['Chỉ một chức năng: chiến đấu.','Hai chức năng: chiến đấu và kinh doanh độc lập.','Bốn chức năng, trong đó có lãnh đạo thay Đảng và quản lý thay Nhà nước.'],
70:['Chỉ số lượng quân nhân hiện đang trực tiếp chiến đấu.','Chỉ cách bố trí đơn vị trên thực địa, không gồm nguồn lực huy động.','Chỉ nguồn ngân sách đã chi trong một năm, không gồm nguồn lực có thể huy động.'],
71:['Chỉ xây dựng thế trận, không cần xây dựng tiềm lực.','Chỉ xây dựng tiềm lực, không cần tổ chức thế trận.','Chỉ mua vũ khí, không xây dựng tiềm lực và thế trận.'],
72:['Chỉ các doanh nghiệp tư nhân.','Chỉ các tổ chức từ thiện quốc tế.','Chỉ các cơ sở giáo dục phổ thông.'],
92:['Nhiệm vụ tạm thời, chỉ làm khi chiến tranh đã nổ ra.','Nhiệm vụ thứ yếu, không cần thực hiện thường xuyên.','Nhiệm vụ riêng của địa phương, không phải nhiệm vụ chiến lược của đất nước.'],
93:['Chỉ phát triển kinh tế, không cần bảo vệ Tổ quốc.','Chỉ bảo vệ Tổ quốc, dừng xây dựng chủ nghĩa xã hội.','Xây dựng thuộc địa và mở rộng lãnh thổ bằng chiến tranh.'],
95:['Chạy đua vũ trang để xâm lược nước khác.','Dùng chiến tranh làm phương tiện duy nhất giải quyết tranh chấp.','Phụ thuộc hoàn toàn vào liên minh quân sự nước ngoài.'],
101:['một nhiệm vụ kinh tế duy nhất.','hai nhiệm vụ không có quan hệ với nhau.','những nhiệm vụ tạm thời chỉ trong chiến tranh.'],
104:['Chỉ có tính quân sự, không huy động toàn dân.','Chỉ tiến hành trên một mặt trận, không toàn diện.','Chỉ dựa vào viện trợ, không dựa vào lực lượng nhân dân.'],
110:['Chỉ có tính quân sự, không huy động toàn dân.','Chỉ tiến hành trên một mặt trận, không toàn diện.','Chỉ dựa vào viện trợ, không dựa vào lực lượng nhân dân.'],
114:['Chỉ huy động quân đội, loại bỏ vai trò của quần chúng.','Chỉ huy động tài chính, không cần sức người và thế trận.','Phân tán khối đoàn kết để từng nhóm tự chiến đấu độc lập.'],
123:['Khó khăn do đất nước hoàn toàn chưa chuẩn bị thế trận.','Bằng chứng cho việc không cần củng cố quốc phòng.','Mục tiêu xâm lược lãnh thổ của nước khác.'],
129:['Chỉ ưu thế tuyệt đối về quân số.','Chỉ ưu thế tuyệt đối về trang bị.','Chỉ viện trợ bên ngoài, không phụ thuộc con người.'],
134:['Mặt trận ngoại giao.','Mặt trận kinh tế.','Mặt trận văn hóa.'],136:['Mặt trận ngoại giao.','Mặt trận kinh tế.','Mặt trận văn hóa.'],
143:['Chỉ Quân đội nhân dân và Công an nhân dân, không gồm Dân quân tự vệ.','Quân đội, doanh nghiệp tư nhân và cơ quan báo chí.','Chỉ Quân đội nhân dân, không gồm Công an và Dân quân tự vệ.'],
144:['22/12/1945.','19/08/1945.','28/03/1935.'],147:['28/03/1945.','22/12/1944.','19/08/1945.'],149:['19/08/1944.','22/12/1944.','28/03/1935.'],
159:['Chỉ lực lượng công an thường trực.','Chỉ lực lượng quân đội thường trực thoát ly sản xuất.','Chỉ lực lượng thanh niên tình nguyện không có chức năng quân sự.'],
161:['Chỉ Dân quân tự vệ và lực lượng dự bị động viên.','Bộ đội chủ lực và các doanh nghiệp tư nhân.','Chỉ quân nhân dự bị chưa được huy động.'],
163:['Lực lượng dân sự không được đăng ký và huấn luyện quân sự.','Chỉ lực lượng thường trực đã huy động toàn bộ trong thời bình.','Lực lượng kinh tế tư nhân không thuộc tổ chức quân sự.'],
172:['Thủ tướng Chính phủ.','Chủ tịch Quốc hội.','Bộ trưởng Bộ Công an.'],
184:['Chỉ phát triển sản xuất, không tổ chức lực lượng quốc phòng.','Chỉ duy trì quân thường trực thoát ly toàn bộ sản xuất.','Chỉ xây dựng thành lũy, không gắn với hoạt động nông nghiệp.'],
187:['Thời bình làm lính thường trực, thời chiến trở về làm ruộng.','Cả thời bình và thời chiến chỉ làm kinh tế, không tham gia đánh giặc.','Cả thời bình và thời chiến chỉ làm lính, không gắn với sản xuất.'],
189:['Chỉ kháng chiến, đình chỉ hoàn toàn xây dựng đất nước.','Chỉ kiến quốc, không tổ chức kháng chiến.','Chờ kết thúc chiến tranh mới bắt đầu sản xuất và xây dựng.'],
196:['Chỉ sản xuất hàng dân dụng, không đáp ứng nhu cầu quân sự.','Chỉ sản xuất hàng quân sự, loại bỏ khả năng sản xuất hàng dân dụng.','Tách biệt hoàn toàn công nghiệp với nhu cầu quốc phòng.'],
203:['Tách biệt hoàn toàn quân y với y tế dân sự.','Chỉ sử dụng y tế dân sự, không tổ chức phối hợp với quân y.','Chỉ sử dụng quân y, không chuẩn bị động viên y tế dân sự.'],
210:['Ngụ binh ư nông: gửi quân trong dân, gắn với sản xuất.','Động vi binh, tĩnh vi dân: thời chiến làm lính, thời bình làm dân.','Vừa kháng chiến, vừa kiến quốc.'],
211:['Phát triển kinh tế biển gắn với bảo vệ chủ quyền.','Xây dựng giao thông lưỡng dụng phục vụ dân sinh và quốc phòng.','Quân - dân y kết hợp để phục vụ dân sinh và quốc phòng.'],
216:['Mùa xuân năm 40 trước Công nguyên.','Mùa xuân năm 43 sau Công nguyên.','Năm 248 sau Công nguyên.'],
219:['Mặt trận quyết định trực tiếp thắng lợi bằng tác chiến quân sự.','Mặt trận chỉ làm nhiệm vụ cung cấp vũ khí.','Mặt trận chỉ đàm phán quốc tế, không tạo cơ sở sức mạnh quân sự.'],
220:['Mặt trận chỉ có vai trò hỗ trợ, không quyết định trực tiếp thắng lợi.','Mặt trận chỉ thực hiện đàm phán ngoại giao.','Mặt trận chỉ vận động quần chúng, không tiến hành tác chiến.'],
228:['Đại Việt.','Đại Ngu.','Đại Nam.'],
230:['Chống quân Tống, do Lý Thường Kiệt lãnh đạo.','Chống quân Nguyên, do Trần Hưng Đạo lãnh đạo.','Chống quân Thanh, do Quang Trung lãnh đạo.'],
231:['Chiến thắng Như Nguyệt năm 1077, do Lý Thường Kiệt lãnh đạo.','Chiến thắng Bạch Đằng năm 1288, do Trần Hưng Đạo lãnh đạo.','Chiến thắng Ngọc Hồi - Đống Đa năm 1789, do Quang Trung lãnh đạo.'],
232:['Ngô Quyền trong kháng chiến chống Nam Hán năm 938.','Trần Hưng Đạo trong kháng chiến chống Nguyên năm 1288.','Quang Trung trong kháng chiến chống Thanh năm 1789.'],
234:['Triều đại nhà Lý.','Triều đại nhà Hồ.','Triều đại nhà Nguyễn.'],
235:['Trận Ngọc Hồi - Đống Đa năm 1789.','Trận Bạch Đằng năm 938.','Trận Như Nguyệt năm 1077.'],
242:['Mặt trận quân sự.','Mặt trận ngoại giao.','Mặt trận binh vận.'],
244:['Chiến dịch Điện Biên Phủ năm 1954.','Chiến dịch Hồ Chí Minh năm 1975.','Chiến dịch Biên giới năm 1950.'],
248:['Từ Đánh chắc, tiến chắc sang Đánh nhanh, thắng nhanh.','Giữ nguyên Đánh nhanh, thắng nhanh trong toàn bộ chiến dịch.','Từ tiến công sang ngừng tác chiến, chỉ đàm phán.'],
251:['Vùng biển rộng 24 hải lý tính từ đường cơ sở.','Vùng biển rộng 200 hải lý tính từ đường cơ sở.','Toàn bộ vùng nước nằm phía trong đường cơ sở.'],
252:['Vùng biển nằm phía ngoài đường cơ sở và rộng 12 hải lý.','Vùng biển tính từ đường cơ sở đến 200 hải lý.','Chỉ phần đáy biển nằm ngoài lãnh hải.'],
254:['Chỉ được xác định bằng ranh giới thời tiết, không có hoạch định.','Là ranh giới ngoài của lãnh hải, không có mốc trên đất liền.','Là đường cơ sở ven biển, không phải đường phân định trên đất liền.'],
255:['12 hải lý tính từ đường cơ sở.','24 hải lý tính từ đường cơ sở.','350 hải lý tính từ đường cơ sở.'],
258:['Ranh giới ngoài vùng đặc quyền kinh tế, cách đường cơ sở 200 hải lý.','Đường cơ sở phân chia nội thủy với lãnh hải.','Ranh giới ngoài vùng tiếp giáp lãnh hải, cách đường cơ sở 24 hải lý.'],
266:['Chỉ là một đường trên mặt đất, không liên quan lòng đất và vùng trời.','Chỉ là ranh giới ngoài vùng đặc quyền kinh tế, không gồm đất liền.','Chỉ là hệ thống mốc trên đất liền, không gồm biên giới biển và vùng trời.'],
275:['Sức mạnh quân sự.','Quy mô kinh tế.','Diện tích lãnh thổ.'],
276:['Chỉ dân cư và tài nguyên, không có chính quyền.','Chỉ lãnh thổ và thị trường, không có dân cư.','Chỉ dân cư và chính quyền, không có lãnh thổ.'],
277:['Chỉ lực lượng biên phòng, công dân khác không có trách nhiệm.','Chỉ chính quyền địa phương biên giới, không thuộc sự nghiệp toàn dân.','Chỉ lực lượng hải quân, không thuộc trách nhiệm của toàn dân.'],
279:['Đơn vị hành chính cấp tỉnh.','Đơn vị hành chính cấp huyện không thay đổi.','Đơn vị hành chính cấp trung ương.'],
280:['1.000 mét.','1.609 mét.','2.000 mét.'],
282:['Việt Nam.','Trung Quốc.','Philippines.'],
284:['Chỉ ở doanh nghiệp, không tổ chức tại địa phương.','Chỉ ở cơ quan nhà nước, không tổ chức tại địa phương.','Chỉ trong đơn vị quân đội thường trực thoát ly sản xuất.'],
285:['Chỉ ở xã, phường, thị trấn, không tổ chức ở cơ quan.','Chỉ ở thôn, bản, không tổ chức ở tổ chức kinh tế.','Chỉ trong quân đội thường trực thoát ly sản xuất.'],
286:['3 thành phần: chỉ tại chỗ, cơ động và biển.','4 thành phần: không có dân quân thường trực.','6 thành phần, trong đó có bộ đội chủ lực.'],
287:['Lực lượng cơ động làm nhiệm vụ trên các địa bàn theo quyết định của cấp có thẩm quyền.','Lực lượng thường trực tại các địa bàn trọng điểm về quốc phòng.','Lực lượng làm nhiệm vụ trên các hải đảo, vùng biển Việt Nam.'],
288:['Lực lượng chỉ làm nhiệm vụ tại thôn, bản và cơ quan, không cơ động địa bàn.','Lực lượng thường trực tại các địa bàn trọng điểm về quốc phòng.','Lực lượng chỉ làm nhiệm vụ trên các hải đảo, vùng biển Việt Nam.'],
289:['Lực lượng chỉ làm nhiệm vụ tại thôn, bản và cơ quan, không thường trực địa bàn trọng điểm.','Lực lượng cơ động làm nhiệm vụ trên các địa bàn theo quyết định của cấp có thẩm quyền.','Lực lượng chỉ làm nhiệm vụ trên các hải đảo, vùng biển Việt Nam.'],
290:['Lực lượng chỉ làm nhiệm vụ tại thôn, bản và cơ quan trên đất liền.','Lực lượng cơ động làm nhiệm vụ trên các địa bàn đất liền.','Lực lượng chỉ thường trực tại địa bàn trọng điểm trên đất liền.'],
300:['Ngày 22/12 (22/12/1944).','Ngày 19/08 (19/08/1945).','Ngày 02/09 (02/09/1945).'],
301:['Nam từ đủ 18 đến hết 40 tuổi; nữ từ đủ 18 đến hết 45 tuổi.','Nam từ đủ 18 đến hết 50 tuổi; nữ từ đủ 18 đến hết 45 tuổi.','Nam và nữ đều từ đủ 18 đến hết 35 tuổi.'],
302:['Nam đến hết 45 tuổi; nữ đến hết 40 tuổi.','Nam đến hết 55 tuổi; nữ đến hết 50 tuổi.','Nam và nữ đều đến hết 40 tuổi.'],
309:['Cấp tiểu đội.','Cấp đại đội.','Cấp tiểu đoàn.'],
310:['Chỉ sĩ quan tại ngũ, không gồm quân nhân dự bị.','Chỉ dân quân tự vệ, không gồm sĩ quan và binh sĩ dự bị.','Chỉ quân nhân chuyên nghiệp đang tại ngũ.'],
313:['01 năm (12 tháng).','03 năm (36 tháng).','04 năm (48 tháng).'],
314:['Chỉ quân nhân dự bị, không gồm phương tiện kỹ thuật dự bị.','Chỉ phương tiện kỹ thuật dự bị, không gồm quân nhân dự bị.','Quân nhân tại ngũ và phương tiện dân sự chưa đăng ký dự bị.'],
315:['Chỉ thuộc Công an nhân dân Việt Nam.','Chỉ thuộc Dân quân tự vệ, không thuộc Quân đội nhân dân.','Là tổ chức kinh tế độc lập, không thuộc lực lượng vũ trang.'],
316:['Lực lượng công an thường trực.','Chỉ bộ đội chủ lực thoát ly toàn bộ sản xuất.','Lực lượng thanh niên tình nguyện không làm nhiệm vụ quân sự.'],
318:['Chỉ sĩ quan dự bị và phương tiện dân sự chưa đăng ký dự bị.','Chỉ hạ sĩ quan, binh sĩ tại ngũ, không gồm phương tiện kỹ thuật.','Chỉ phương tiện kỹ thuật dự bị, không gồm quân nhân dự bị.'],
323:['Chỉ mô tả thời điểm tổ chức phong trào, không nói vị trí hay tác dụng.','Chỉ mô tả hình thức sinh hoạt, không nói vai trò huy động sức mạnh.','Chỉ mô tả thủ tục hành chính, không nói tác dụng của phong trào.'],
325:['Bộ Giáo dục và Đào tạo là cơ quan duy nhất tổ chức.','Bộ Y tế là cơ quan duy nhất tổ chức.','Bộ Tài chính là cơ quan duy nhất tổ chức.'],
326:['Ngày 22/12 hàng năm.','Ngày 28/03 hàng năm.','Ngày 02/09 hàng năm.'],
328:['Chỉ trách nhiệm của công an, không thuộc toàn dân.','Chỉ trách nhiệm của chính quyền, không thuộc các tổ chức và người dân.','Chỉ trách nhiệm của doanh nghiệp, không thuộc hệ thống chính trị.'],
334:['Chỉ các lực lượng quân đội ở đơn vị chủ lực.','Chỉ cơ quan ngoại giao và tổ chức quốc tế.','Chỉ doanh nghiệp vận tải, không có lực lượng an ninh cơ sở.'],
346:['Chỉ hoạt động bảo đảm an toàn giao thông.','Chỉ hoạt động phòng cháy chữa cháy.','Chỉ hoạt động phòng ngừa tai nạn lao động.'],
349:['Thời kỳ đổi mới kinh tế từ năm 1986.','Thời kỳ xây dựng đất nước sau năm 1975, không thuộc kháng chiến.','Thời kỳ chống quân Nguyên - Mông của nhà Trần.'],
366:['Chỉ lực lượng Hải quân.','Chỉ lực lượng Dân quân tự vệ.','Chỉ lực lượng Kiểm ngư.'],
367:['Chỉ lực lượng Hải quân.','Chỉ lực lượng Dân quân tự vệ.','Chỉ lực lượng Kiểm ngư.'],
370:['An ninh giao thông.','An ninh du lịch.','An ninh thể thao.'],
371:['Chỉ lực lượng Cảnh sát giao thông đường bộ.','Chỉ lực lượng Dân phòng ở khu dân cư nội địa.','Chỉ lực lượng cứu hỏa đô thị.'],
372:['Chỉ công tác bảo vệ bí mật nhà nước.','Chỉ công tác tổ chức bầu cử.','Chỉ công tác bảo vệ an ninh chính trị nội bộ.'],
381:['Chỉ công tác bảo vệ bí mật nhà nước.','Chỉ công tác tổ chức bầu cử.','Chỉ công tác bảo vệ an ninh chính trị nội bộ.'],
384:['Người có hành vi gây rối trật tự công cộng.','Người có hành vi vi phạm quy định an toàn giao thông.','Người có hành vi phạm tội xâm phạm trật tự an toàn xã hội.'],
385:['Phòng chống tội phạm về trật tự an toàn xã hội.','Bảo đảm trật tự an toàn giao thông.','Phòng cháy chữa cháy và bảo vệ môi trường.']
};
const CONCEPTS=[
['tiềm lực','Tiềm lực nói về khả năng và nguồn lực có thể huy động: con người, vật chất, tài chính hoặc năng lực thuộc một lĩnh vực. Đừng đồng nhất “có thể huy động” với lực lượng đã triển khai. Thế trận lại nói về cách tổ chức và bố trí các lực lượng, nguồn lực đó.'],
['thế trận','Thế trận nhấn mạnh việc tổ chức, bố trí lực lượng và tiềm lực theo không gian, địa bàn và kế hoạch. Có nguồn lực mạnh là xây dựng tiềm lực; tổ chức nguồn lực vào vị trí phù hợp là xây dựng thế trận. Hai nội dung gắn nhau nhưng không đồng nghĩa.'],
['toàn dân','Toàn dân xác định phạm vi người tham gia và trách nhiệm chung của nhân dân. “Làm nòng cốt” là vai trò trung tâm của một lực lượng, không có nghĩa lực lượng đó làm tất cả hoặc công dân khác không có trách nhiệm.'],
['nòng cốt','Nòng cốt là lực lượng giữ vai trò trung tâm trong tổ chức và thực hiện nhiệm vụ. Cần tách hai câu hỏi: ai là nòng cốt và ai có trách nhiệm tham gia. Không suy ra từ “nòng cốt” thành “duy nhất”.'],
['toàn diện','Toàn diện nói đến nhiều mặt, nhiều lĩnh vực được phối hợp. Đáp án có thể liệt kê chính trị, kinh tế, quân sự hoặc những lĩnh vực liên quan; học một mặt riêng lẻ sẽ làm thiếu phạm vi của khái niệm.'],
['lãnh đạo','Phân biệt vai trò lãnh đạo với quản lý và trực tiếp thực hiện. Khi đáp án nói sự lãnh đạo của Đảng, không thay chủ thể đó bằng một cơ quan thực thi. Nếu có cả Nhà nước, cần nhớ vai trò quản lý tương ứng, thay vì hoán đổi hai vai trò.'],
['lưỡng dụng','Lưỡng dụng là có thể phục vụ cả nhu cầu dân sự và nhu cầu quốc phòng. Hãy nghĩ đến một công trình giao thông phục vụ đi lại, vận chuyển thời bình và đáp ứng cơ động lực lượng khi cần. Phương án chỉ giữ một mục đích sẽ mất ý “kết hợp”.'],
['kinh tế quyết định','Quan hệ này có hai chiều nhưng vai trò không giống nhau: kinh tế tạo cơ sở nguồn lực cho quốc phòng, an ninh; quốc phòng, an ninh tác động trở lại bằng việc giữ môi trường ổn định hoặc những tác động khác. Không đảo chiều quyết định và không xóa chiều tác động trở lại.'],
['chính trị quyết định','Đáp án đang phân biệt mục tiêu chính trị và phương tiện chiến tranh. Chính trị chi phối mục tiêu của chiến tranh; chiến tranh được dùng như công cụ thực hiện mục tiêu đó. Vì vậy không hiểu chiến tranh là hoạt động kỹ thuật tách khỏi chính trị.'],
['tư hữu','Cần phân biệt nguồn gốc sâu xa (chế độ chiếm hữu tư nhân về tư liệu sản xuất) với điều kiện xã hội trực tiếp (giai cấp đối kháng, nhà nước). Đọc kỹ câu hỏi đang hỏi cấp độ nào, tránh dùng một ý đúng nhưng trả lời sai trọng tâm.'],
['giai cấp','Bản chất giai cấp nói đến lực lượng xã hội và mục tiêu chính trị mà quân đội phục vụ, không phải quân phục hay số lượng vũ khí. Nếu câu hỏi hỏi giai cấp nào, trả lời tên giai cấp; nếu hỏi biểu hiện, cần nhớ các mặt được liệt kê trong đáp án.'],
['chính nghĩa','Chính nghĩa, tự vệ gắn với mục tiêu bảo vệ độc lập và chủ quyền. Hãy xem mục đích của cuộc chiến tranh được nêu trong câu hỏi; không đánh đồng bảo vệ Tổ quốc với tiến hành chiến tranh xâm lược.'],
['tự lực','Tự lực nhấn mạnh dựa vào sức mình là chính. Điều đó không đồng nghĩa từ chối hợp tác hoặc sự ủng hộ quốc tế; điểm cần phân biệt là đâu là nền tảng chủ yếu và đâu là yếu tố được kết hợp, tranh thủ.'],
['thời đại','Sức mạnh dân tộc là nội lực của đất nước và nhân dân; sức mạnh thời đại là những điều kiện, sự ủng hộ và nguồn lực quốc tế có thể kết hợp. “Kết hợp” không có nghĩa thay nội lực bằng sự phụ thuộc hoàn toàn bên ngoài.'],
['dự bị','Dự bị động viên nhấn mạnh nguồn lực được chuẩn bị, đăng ký, quản lý và huấn luyện để huy động khi cần. Phân biệt với lực lượng thường trực; nhớ cả con người và phương tiện kỹ thuật khi câu hỏi hỏi thành phần lực lượng.'],
['dân quân','Dân quân tự vệ gắn với quần chúng và việc không thoát ly sản xuất, công tác. Phân biệt nơi tổ chức: địa phương gọi là dân quân, cơ quan hoặc tổ chức gọi là tự vệ. Các loại tại chỗ, cơ động, thường trực, biển khác nhau ở địa bàn và cách thực hiện nhiệm vụ.'],
['chủ quyền','Chủ quyền nhấn mạnh quyền làm chủ của quốc gia. Đọc kỹ đối tượng: lãnh thổ, biên giới, vùng biển hay quyền pháp lý. Không đánh đồng chủ quyền lãnh thổ với các quyền ở mọi vùng biển, và không đánh đồng bình đẳng pháp lý với bình đẳng quân số hay quy mô kinh tế.'],
['đường cơ sở','Đường cơ sở là mốc tham chiếu trong các đáp án về vùng biển. Nội thủy ở phía trong, lãnh hải ở phía ngoài và đáp án nêu chiều rộng tính từ đường cơ sở. Cần nhớ cả tên vùng, số đo và mốc tính, không chỉ một con số.'],
['hải lý','Học cả đơn vị và mốc tính. “Hải lý” không phải “km”; các số 12, 24, 200 thường gắn với các khái niệm vùng biển khác nhau. Với câu quy đổi, giữ đúng số mét của một hải lý theo đáp án.'],
['biên giới','Biên giới xác định giới hạn lãnh thổ, còn bảo vệ biên giới là công việc xây dựng, quản lý và bảo vệ giới hạn đó cùng lợi ích liên quan. Phân biệt biên giới đất liền với biên giới biển; tránh lấy đường cơ sở hoặc ranh giới vùng đặc quyền kinh tế làm đáp án thay thế.'],
['mặt trận','Các mặt trận có vai trò khác nhau. Trong bộ câu hỏi này, chính trị được nêu là cơ sở tạo sức mạnh quân sự, còn quân sự quyết định trực tiếp thắng lợi chiến tranh. Hãy bám vào từ “cơ sở” hay “trực tiếp” trong câu hỏi để tránh đảo vai trò.'],
['mưu','Mưu nhấn mạnh mưu trí, lừa địch và đánh vào chỗ yếu hoặc bất ngờ. Kế nhấn mạnh dàn xếp thế trận để buộc địch hành động theo ý định. Hai ý gần nhau nhưng câu hỏi phân biệt trọng tâm của cách sử dụng.'],
['kế','Khi học một kế sách, nhớ cả tên, ý nghĩa và bối cảnh sử dụng. Chẳng hạn “động” và “tĩnh” trong đáp án chỉ hai trạng thái chiến tranh và hòa bình; không hoán đổi người lính thời chiến với người dân sản xuất thời bình.'],
['nghệ thuật','Nghệ thuật quân sự nhấn mạnh cách tổ chức và sử dụng sức mạnh phù hợp với điều kiện cụ thể. Không chỉ so số lượng quân, vũ khí; cần xem mưu kế, thế trận, sự phối hợp và sức mạnh nhân dân trong đáp án.'],
['an ninh','Phân biệt trạng thái cần bảo vệ với hoạt động bảo vệ trạng thái đó. An ninh quốc gia nói đến ổn định, phát triển và các lợi ích chủ quyền; bảo vệ an ninh quốc gia nói đến phòng ngừa, phát hiện, ngăn chặn và đấu tranh với sự xâm phạm.'],
['trật tự','Trật tự, an toàn xã hội là trạng thái xã hội có kỷ cương, ổn định. Bảo đảm trạng thái này là các hoạt động phòng ngừa, phát hiện và xử lý vi phạm. Đừng dùng định nghĩa trạng thái để thay hoàn toàn định nghĩa hoạt động.'],
['phong trào','Trong câu hỏi về phong trào, hãy phân biệt khái niệm (là gì), mục đích (để làm gì), đặc điểm (diễn ra như thế nào), chủ thể (ai thực hiện), nội dung (làm gì) và biện pháp (làm bằng cách nào). Từ khóa trong câu hỏi quyết định nhóm cần chọn.'],
['tiến công','Chủ động tiến công nhấn mạnh giành thế chủ động, không chỉ chờ đối phương hành động. Phân biệt tiến công trước trong một kế sách cụ thể với thái độ thụ động phòng thủ hoặc sự bất cẩn không chuẩn bị.'],
['hòa bình','Giải quyết bằng hòa bình nhấn mạnh đàm phán, tôn trọng chủ quyền và luật pháp. Điều này không đồng nghĩa từ bỏ quyền làm chủ hoặc không chuẩn bị năng lực tự vệ.'],
['quốc phòng','Quốc phòng gắn với công cuộc giữ nước và sức mạnh tổng hợp. Không thu hẹp toàn bộ khái niệm thành mua sắm vũ khí hoặc nhiệm vụ riêng của quân đội; đáp án cụ thể cho biết mục đích, lực lượng và phạm vi cần nhớ.']
];
const RULES=[
['toàn dân',['riêng quân đội, không có nhân dân tham gia','riêng công an, không có nhân dân tham gia','riêng cơ quan nhà nước, không thuộc trách nhiệm của người dân'],'Đổi phạm vi toàn dân thành một lực lượng riêng lẻ, làm mất tính bao quát.'],
['toàn diện',['chỉ về quân sự, bỏ qua các mặt khác','chỉ về kinh tế, bỏ qua các mặt khác','chỉ về ngoại giao, bỏ qua các mặt khác'],'Thu hẹp phạm vi nhiều mặt xuống một mặt duy nhất.'],
['Đảng Cộng sản Việt Nam',['một tổ chức kinh tế tư nhân','một tổ chức quân sự nước ngoài','một tổ chức xã hội tự phát'],'Thay đổi chủ thể lãnh đạo được xác định trong đáp án.'],
['sự lãnh đạo của Đảng',['sự lãnh đạo duy nhất của tổ chức kinh tế tư nhân','sự chỉ huy hoàn toàn của tổ chức nước ngoài','việc loại bỏ vai trò lãnh đạo của Đảng'],'Thay đổi hoặc phủ nhận chủ thể lãnh đạo trong đáp án.'],
['Công an nhân dân',['Hải quân, không có Công an tham gia','Kiểm ngư, không có Công an tham gia','Dân quân tự vệ, không có Công an tham gia'],'Thay thế lực lượng được hỏi bằng lực lượng khác.'],
['nòng cốt',['không có vai trò trong nhiệm vụ này','chỉ có vai trò phụ trợ, không làm nòng cốt','duy nhất tham gia, các lực lượng khác không có trách nhiệm'],'Đổi vai trò nòng cốt thành không tham gia, phụ trợ hoặc độc quyền nhiệm vụ.'],
['chính trị - tinh thần',['chỉ quân số, không có vai trò chính trị - tinh thần','chỉ vũ khí, không có vai trò chính trị - tinh thần','chỉ tài chính, không có vai trò chính trị - tinh thần'],'Thay nhân tố con người và tinh thần bằng một yếu tố vật chất đơn lẻ.'],
['chính trị, tinh thần',['chỉ vũ khí, trang bị','chỉ tài chính, ngân sách','chỉ địa hình, khí hậu'],'Thay đổi lĩnh vực của tiềm lực được xác định trong đáp án.'],
['độc lập, chủ quyền',['mở rộng thuộc địa, xâm lược lãnh thổ','từ bỏ độc lập và phụ thuộc quốc gia khác','tước quyền làm chủ của nhân dân'],'Thay đổi mục tiêu bảo vệ độc lập, chủ quyền thành mục tiêu trái ngược.'],
['lưỡng dụng',['chỉ phục vụ dân sự, không phục vụ quốc phòng','chỉ phục vụ quân sự, không phục vụ dân sinh','không đáp ứng nhu cầu dân sự hoặc quốc phòng'],'Làm mất đặc điểm phục vụ được cả dân sự và quốc phòng.'],
['tự lực',['phụ thuộc hoàn toàn vào nước ngoài','chỉ trông chờ viện trợ từ bên ngoài','từ bỏ hoàn toàn nội lực của đất nước'],'Đảo ngược nguyên tắc dựa vào nội lực là chính.'],
['tự chủ',['phụ thuộc hoàn toàn vào quốc gia khác','không có quyền tự quyết trong lĩnh vực này','từ bỏ quyền quyết định của đất nước'],'Phủ nhận quyền tự quyết được nhấn mạnh trong đáp án.'],
['hòa bình',['chiến tranh xâm lược','sử dụng vũ lực là biện pháp duy nhất','từ bỏ đàm phán và hợp tác'],'Đổi phương hướng hòa bình thành phương hướng đối lập.'],
['toàn bộ lãnh thổ',['chỉ một doanh trại, bỏ qua các địa bàn khác','chỉ một đô thị, bỏ qua các địa bàn khác','chỉ một cửa khẩu, bỏ qua các địa bàn khác'],'Thu hẹp phạm vi tổ chức trên toàn lãnh thổ thành một vị trí.'],
['phối hợp',['tách rời hoàn toàn, không phối hợp','loại bỏ quan hệ giữa','ngăn cản mọi hoạt động của'],'Phủ nhận quan hệ phối hợp của các nội dung được liệt kê.'],
['kết hợp',['tách rời hoàn toàn','chỉ lựa chọn một yếu tố, loại bỏ yếu tố còn lại thay vì kết hợp','không cho phép phối hợp'],'Làm mất quan hệ kết hợp giữa các yếu tố của đáp án.'],
['thường xuyên',['chỉ một lần, không cần duy trì','chỉ khi chiến tranh đã kết thúc','chỉ trong tình huống đã mất an ninh'],'Thay đổi tính liên tục của nhiệm vụ.'],
['chủ động',['hoàn toàn thụ động, chỉ chờ địch hành động','không chuẩn bị, không nắm tình hình','từ bỏ việc giành thế chủ động'],'Đảo ngược yêu cầu chủ động trong đáp án.'],
['quân sự',['chỉ văn hóa, không liên quan quân sự','chỉ du lịch, không liên quan quân sự','chỉ thể thao, không liên quan quân sự'],'Thay lĩnh vực quân sự bằng lĩnh vực khác, không đúng phạm vi câu hỏi.'],
['kinh tế',['chỉ thể thao, không liên quan kinh tế','chỉ nghi lễ, không liên quan kinh tế','chỉ quân phục, không liên quan kinh tế'],'Thay lĩnh vực kinh tế bằng lĩnh vực khác, không đúng trọng tâm.'],
['chính trị',['chỉ hình thức trang phục, không có nội dung chính trị','chỉ điều kiện thời tiết, không có nội dung chính trị','chỉ đặc điểm địa hình, không có nội dung chính trị'],'Thay nội dung chính trị bằng yếu tố hình thức hoặc tự nhiên.'],
['pháp luật',['chỉ sở thích cá nhân, không dựa trên pháp luật','chỉ tập quán tùy tiện, không dựa trên pháp luật','chỉ mệnh lệnh tư nhân, không dựa trên pháp luật'],'Loại bỏ cơ sở pháp luật được nêu trong đáp án.']
];
const SPECIAL={
4:'Nhớ cấu trúc 4 học phần thay vì chỉ con số: HP1 đường lối; HP2 công tác; HP3 quân sự chung; HP4 kỹ thuật, chiến thuật. Các lựa chọn 3, 5 hoặc 6 đều làm thay đổi cấu trúc trong CSV.',
5:'Có thể tự kiểm tra bằng tổng thời lượng trong CSV: 45 + 30 + 30 + 60 = 165 tiết. Đây là tổng chương trình, không phải thời lượng riêng một học phần.',
6:'HP1 là 45 tiết trong CSV. Phân biệt với HP2 và HP3 đều 30 tiết, HP4 là 60 tiết. Câu hỏi hỏi học phần 1 nên không chọn tổng 165 tiết.',
7:'HP2 là 30 tiết trong CSV. HP3 cũng có 30 tiết nhưng tên học phần khác; cùng thời lượng không có nghĩa là cùng nội dung.',
8:'HP3 là 30 tiết trong CSV. Tên học phần là quân sự chung; đừng lấy 45 tiết của HP1 hoặc 60 tiết của HP4.',
9:'HP4 là 60 tiết trong CSV. Gắn số tiết với kỹ thuật chiến đấu bộ binh và chiến thuật; không nhầm với 45 tiết của phần đường lối.',
18:'Đáp án có ba điều kiện cùng phải nhớ: tham dự tối thiểu 80% thời lượng; đủ số lần kiểm tra; mỗi lần kiểm tra từ 5 điểm trở lên. Chỉ đạt điểm nhưng thiếu chuyên cần, hoặc đủ chuyên cần nhưng thiếu kiểm tra, đều chưa khớp đáp án.',
19:'Theo khóa đáp án được nhập, có cả điều kiện điểm trung bình từ 5,0 và điều kiện không bị truy cứu trách nhiệm hình sự tại thời điểm cấp. Chú ý cụm “và” nối hai điều kiện, không được chỉ giữ một điều kiện.',
22:'CSV chứa một ô đáp án duy nhất nhưng trong ô ghi “2 tín chỉ … / 1 tín chỉ …”. Web giữ nguyên toàn bộ ô đó làm khóa chấm, không tự chọn một vế hoặc xác nhận văn bản pháp luật. Hãy chốt giá trị cần học với giảng viên nếu đề thi yêu cầu một con số.',
23:'CSV chứa một ô đáp án duy nhất nhưng trong ô ghi “4 tín chỉ … / 2 tín chỉ …”. Web giữ nguyên toàn bộ ô đó làm khóa chấm; phần ghi chú là dữ liệu nguồn, không phải hai lựa chọn do web bổ sung.',
25:'Trong cách trình bày của CSV, giai cấp đối kháng là điều kiện xã hội dẫn tới chiến tranh. Nếu câu hỏi hỏi nguồn gốc sâu xa, bộ câu hỏi khác nêu chế độ tư hữu tư liệu sản xuất. Đừng thay một tầng nguyên nhân bằng tầng khác mà không đọc câu hỏi.',
41:'“Phản ánh tập trung” nói đến quan hệ giữa chính trị và kinh tế. Câu hỏi không yêu cầu kể mọi lĩnh vực có ảnh hưởng chính trị; khóa đáp án yêu cầu xác định nền tảng là kinh tế.',
46:'Hình ảnh “con đỉa hai vòi” dùng để gợi nhớ hai phía bị bóc lột: người lao động ở chính quốc và nhân dân thuộc địa. Nhớ số “hai” và quan hệ giữa hai phía, không chỉ nhớ tên con vật.',
61:'Ba chức năng cần tách: chiến đấu để bảo vệ Tổ quốc; công tác để gắn bó, vận động và giúp nhân dân; lao động sản xuất để góp phần xây dựng đất nước. Câu hỏi này hỏi chức năng, khác với câu chỉ hỏi hai nhiệm vụ được nêu trong một ngữ cảnh khác.',
93:'Hai nhiệm vụ có quan hệ gắn bó: xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc xã hội chủ nghĩa. Xây dựng tạo tiềm lực; bảo vệ giữ điều kiện để xây dựng. Phương án loại bỏ một vế làm mất cặp nhiệm vụ trong đáp án.',
172:'Thống lĩnh là vai trò được hỏi, khác với quản lý hành chính hoặc chỉ huy chuyên ngành. Khóa đáp án xác định Chủ tịch nước; không suy ra người đứng đầu Chính phủ hoặc một bộ đương nhiên là người thống lĩnh.',
187:'“Động” ứng với đất nước có chiến tranh: làm người lính đánh giặc. “Tĩnh” ứng với thời bình: làm người dân phát triển kinh tế. Cách nhớ bằng hai trạng thái giúp tránh đảo ngược hai vế.',
228:'Ô đáp án gốc ghi “Xích Quỷ … / Văn Lang”. Web coi nguyên văn ô này là khóa chấm theo yêu cầu của bạn. Nội dung nhiều tên trong một ô cần được chốt theo tài liệu giảng viên; web không tự sửa câu trả lời lịch sử.',
231:'Gắn ba dữ kiện thành một bộ: Bạch Đằng — năm 938 — Ngô Quyền. Bạch Đằng năm 1288 là mốc khác gắn với Trần Hưng Đạo; cùng tên địa danh không đồng nghĩa cùng sự kiện.',
232:'Gắn kế sách với người và bối cảnh: tiên phát chế nhân — Lý Thường Kiệt — chống Tống 1075–1077. Cách hiểu là chủ động tiến công trước để giành thế chủ động, khác với chỉ đợi địch tiến công rồi ứng phó.',
235:'Rạch Gầm - Xoài Mút — Nguyễn Huệ — quân Xiêm — 1785. Đừng nhầm với Ngọc Hồi - Đống Đa năm 1789 chống quân Thanh. Dùng cặp đối chiếu thay vì học từng năm rời rạc.',
248:'Hướng thay đổi là từ nhanh sang chắc: “đánh nhanh, thắng nhanh” → “đánh chắc, tiến chắc”. Phương án đảo chiều hoặc giữ nguyên phương châm cũ làm sai trọng tâm “đã thay đổi”.',
251:'Giữ đủ ba ý trong khóa đáp án: lãnh hải; thuộc chủ quyền quốc gia; rộng 12 hải lý tính từ đường cơ sở. 200 hải lý trong bộ câu hỏi là số gắn với vùng đặc quyền kinh tế, không phải chiều rộng lãnh hải.',
252:'Từ khóa quyết định là “phía trong đường cơ sở”. Lãnh hải nằm phía ngoài đường cơ sở; vùng đặc quyền kinh tế là khái niệm khác. Vị trí so với đường cơ sở giúp phân biệt tốt hơn học riêng tên vùng biển.',
255:'Khóa đáp án ghi 200 hải lý tính từ đường cơ sở. Phân biệt với 12 hải lý của lãnh hải; không cộng thêm 12 vào 200 vì hai đáp án cùng nêu mốc tính là đường cơ sở.',
280:'Một hải lý trong CSV bằng 1.852 mét, tức 1852 m. Dấu chấm là dấu phân tách hàng nghìn trong cách ghi này. Không nhầm với 1000 m của một kilômét hoặc khoảng 1609 m của một dặm thông thường.',
281:'Giữ nguyên đáp án nguồn để luyện theo tài liệu, nhưng lưu ý mô tả trong ô có nhiều mốc 200/350 hải lý và cần đối chiếu giáo trình khi học bản chất của thềm lục địa. Không dùng ghi chú học tập này như kết luận pháp lý độc lập.',
282:'Khóa đáp án là Mỹ (Hoa Kỳ). Cách diễn đạt câu hỏi “ký kết tham gia” có thể gộp các trạng thái ký và phê chuẩn; khi học theo đề cần giữ đáp án của tài liệu, khi nghiên cứu cần tách rõ hai khái niệm.',
284:'Điểm phân biệt là nơi tổ chức: ở địa phương gọi là dân quân. So với tự vệ được tổ chức tại cơ quan hoặc tổ chức. Cả hai đều thuộc lực lượng quần chúng không thoát ly sản xuất, công tác.',
285:'Điểm phân biệt là nơi tổ chức: cơ quan, tổ chức, đơn vị sự nghiệp hoặc tổ chức kinh tế gọi là tự vệ; ở địa phương gọi là dân quân. Không lấy đặc điểm chung để bỏ qua dấu hiệu nơi tổ chức.',
301:'Nam: từ đủ 18 đến hết 45; nữ: từ đủ 18 đến hết 40 theo CSV. Nhớ điểm đầu cùng là 18, điểm cuối khác nhau 5 tuổi. Đừng lấy độ tuổi kéo dài khi tình nguyện của câu kế tiếp thay vào câu này.',
302:'Khi tình nguyện, CSV nêu nam đến hết 50 và nữ đến hết 45. So với mốc thông thường 45/40, cả hai tăng 5 tuổi. Phân biệt điều kiện tình nguyện với độ tuổi thông thường.',
313:'Hai cách ghi 02 năm và 24 tháng biểu thị cùng một thời hạn trong đáp án nguồn. Nếu đổi năm thì phải đổi tháng tương ứng; các lựa chọn 1, 3, 4 năm không khớp thời hạn này.',
314:'Có hai nhóm: quân nhân dự bị và phương tiện kỹ thuật dự bị. Không chỉ là con người; không phải mọi phương tiện dân sự đều tự động trở thành phương tiện kỹ thuật dự bị.',
384:'Câu hỏi có chữ “không”. Người chấp hành nghiêm pháp luật không phải người xâm phạm trật tự an toàn xã hội. Các phương án nói hành vi gây rối hoặc vi phạm là nhóm bị loại, dù chúng có liên quan đến chủ đề.',
385:'Câu hỏi có chữ “không”. Đáp án nguồn mô tả nhóm nằm ngoài phạm vi, còn phòng chống tội phạm, an toàn giao thông, PCCC và môi trường là các nội dung được nêu trong phạm vi. Đọc lại từ phủ định trước khi chọn.'
};
function normalizeText(s){return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim()}
function buildTeaching(q,isDefault=false,pool=[]){let generated=[];if(isDefault&&EXACT[q.id])generated=EXACT[q.id].map(a=>({text:a,why:'Phương án này không khớp chủ thể, phạm vi, vai trò hoặc dữ kiện mà khóa đáp án của câu hỏi xác định. Đối chiếu phần giải thích đáp án để tìm điểm khác biệt.'}));
if(!generated.length&&isDefault){let a=q.a;const numeric=a.match(/\d[\d.,]*/);if(numeric){let token=numeric[0],n=Number(token.replace(/[.,]/g,''));if(Number.isFinite(n)){let nums=n>1000?[n-1,n+1,n+10]:n>100?[n-10,n+10,n+20]:[Math.max(1,n-1),n+1,n+2];generated=nums.filter(x=>x!==n).map(x=>({text:a.replace(token,String(x)),why:`Thay dữ kiện “${token}” bằng “${x}”. Khóa đáp án yêu cầu giữ đúng số, thời điểm hoặc mức quy định; một số gần giống không phải cùng dữ kiện.`}))}}
if(generated.length<3){for(let [term,replacements,why]of RULES){let idx=a.toLowerCase().indexOf(term.toLowerCase());if(idx<0)continue;for(let replacement of replacements){let text=a.slice(0,idx)+replacement+a.slice(idx+term.length);if(!generated.some(x=>normalizeText(x.text)===normalizeText(text)))generated.push({text,why});if(generated.length>=3)break}if(generated.length>=3)break}}
if(generated.length<3){let clean=a.replace(/[.。]$/,'');let first=clean.split(/[;,]/)[0];for(let x of [{text:'Nội dung này không phải '+clean.charAt(0).toLowerCase()+clean.slice(1)+'.',why:'Phủ nhận nội dung được xác định trong đáp án nguồn.'},{text:'Chỉ có ý nghĩa hình thức; không thực hiện nội dung: '+clean+'.',why:'Biến một nội dung hoặc chức năng thực chất thành hình thức và phủ nhận việc thực hiện.'},{text:'Không cần xét đến '+first.charAt(0).toLowerCase()+first.slice(1)+' khi xác định vấn đề này.',why:'Loại bỏ ý trọng tâm mà đáp án nguồn yêu cầu.'}]){if(!generated.some(y=>y.text===x.text))generated.push(x);if(generated.length>=3)break}}}
if(!isDefault){let words=new Set(normalizeText(q.q+' '+q.a).split(' ').filter(x=>x.length>2));generated=pool.filter(x=>normalizeText(x.a)!==normalizeText(q.a)).map(x=>({text:x.a,why:'Đây là đáp án của câu khác trong bộ nhập. Cần kiểm tra xem nó có đồng thời đúng với câu hiện tại hay không trước khi dùng để chấm điểm.',score:normalizeText(x.q+' '+x.a).split(' ').filter(w=>words.has(w)).length})).sort((a,b)=>b.score-a.score);generated=generated.filter((x,i,a)=>a.findIndex(y=>normalizeText(y.text)===normalizeText(x.text))===i).slice(0,3)}
let concepts=CONCEPTS.filter(([key])=>(q.q+' '+q.a).toLowerCase().includes(key)).slice(0,2).map(x=>x[1]);let parts=q.a.split(/[;]|,(?=\s)/).map(x=>x.trim()).filter(x=>x.length>5);let explanation=isDefault?(SPECIAL[q.id]||`Câu hỏi yêu cầu xác định: ${q.q.replace(/\?$/,'')}. Theo khóa đáp án của bạn, ý cần trả lời là: ${q.a}\n\n${parts.length>1?'Đọc đủ các vế: '+parts.map((p,i)=>`${i+1}) ${p}`).join('; ')+'. Không bỏ một vế hoặc thay đổi quan hệ giữa các vế.':'Hãy giữ đúng đối tượng và nội dung được nêu, không thay một khái niệm gần nghĩa chỉ vì có cùng chủ đề.'}`)+(concepts.length?'\n\n'+concepts.join('\n\n'):''):'Đáp án trong file nhập: '+q.a+'\n\nFile chưa có giải thích. Đây là phần đối chiếu đáp án, không phải giải thích kiến thức đã được biên soạn. Bạn có thể bổ sung tại “Sửa nội dung câu”.';
return {...q,flag:false,distractors:generated.slice(0,3).map(x=>x.text),wrongReasons:generated.slice(0,3).map(x=>x.why),explanation,prompt:'Không nhìn lựa chọn: hãy trả lời câu này bằng lời của bạn, rồi nêu một điểm khác biệt với phương án gần giống.',reviewed:isDefault,origin:isDefault?'biên soạn theo CSV gốc':'đáp án khác trong CSV — cần duyệt'};}
const EXTRA=`
24|Môn học tự chọn, không phải điều kiện xét tốt nghiệp.|Môn học chỉ dành cho người đăng ký nhập ngũ.|Môn học bắt buộc nhưng chỉ nghiên cứu kỹ thuật, không có nội dung đường lối QP-AN.
26|Quân đội lãnh đạo thay Đảng trong mọi mặt bảo vệ Tổ quốc.|Nhà nước quản lý quốc phòng mà không có vai trò lãnh đạo của Đảng.|Chỉ tổ chức kinh tế lãnh đạo sự nghiệp bảo vệ Tổ quốc.
28|Bạo lực phản cách mạng sẽ tự mất đi, không cần chống lại.|Chỉ dùng thuyết phục, không cần chống lại bạo lực phản cách mạng.|Dùng bạo lực để xâm lược và áp đặt quyền thống trị lên dân tộc khác.
29|Là kết quả tình cờ, không có quan hệ với đấu tranh dân tộc.|Chỉ là kết quả thuê quân nước ngoài.|Chỉ xuất phát từ nhu cầu kinh doanh, không do yêu cầu cách mạng.
30|Chỉ chiến đấu, không tham gia lao động sản xuất.|Chỉ lao động sản xuất, không chiến đấu bảo vệ Tổ quốc.|Chiến đấu xâm lược và mở rộng thuộc địa.
35|Chỉ do nhu cầu mở rộng thuộc địa ra nước ngoài.|Không cần bảo vệ thành quả cách mạng sau khi giành chính quyền.|Chỉ do yêu cầu cạnh tranh thương mại, không gắn xây dựng CNXH.
36|Do chủ nghĩa đế quốc hoàn toàn từ bỏ xâm lược.|Do các thế lực phản động luôn ủng hộ xây dựng CNXH.|Do mọi mâu thuẫn và nguy cơ chống phá đã tự mất đi.
47|Chỉ lực lượng doanh nhân, không có lực lượng vũ trang.|Chỉ cơ quan ngoại giao, không có lực lượng vũ trang.|Chỉ cơ sở giáo dục, không có lực lượng vũ trang.
48|Ra đời trước khi xã hội có tư hữu và giai cấp đối kháng.|Ra đời chỉ do nhu cầu sản xuất nông nghiệp.|Ra đời do bản năng sinh học, không gắn với nhà nước hay giai cấp.
54|Độc lập dân tộc tách rời hoàn toàn chủ nghĩa xã hội.|Chỉ độc lập về kinh tế, không cần độc lập dân tộc.|Chỉ mở rộng lãnh thổ, không gắn giải phóng dân tộc.
60|Thay đổi mục tiêu cốt lõi để giữ phương pháp cố định.|Cứng nhắc về mọi biện pháp, không ứng biến tình hình.|Thỏa hiệp từ bỏ nguyên tắc độc lập và chủ quyền.
63|Chỉ là nghĩa vụ của quân nhân, không thuộc mọi công dân.|Chỉ là quyền tự chọn, không phải nghĩa vụ công dân.|Chỉ là trách nhiệm của người đứng đầu Nhà nước.
67|Xâm lược các dân tộc khác để mở rộng quyền thống trị.|Giành chính quyền nhưng không cần giữ và bảo vệ chính quyền.|Thay bạo lực phản cách mạng bằng sự thống trị thực dân mới.
68|Khi xã hội chưa có tư hữu, giai cấp hoặc nhà nước.|Chỉ khi con người chế tạo công cụ bằng đá.|Chỉ khi xuất hiện trao đổi hàng hóa, không cần phân hóa giai cấp.
74|Chỉ tăng nhập khẩu hàng tiêu dùng, không phát triển năng lực sản xuất.|Đình chỉ công nghiệp hóa và giữ công nghệ lạc hậu.|Chỉ phát triển nghi lễ, không phát triển nền kinh tế.
76|Chỉ số lượng quân nhân hiện có, không phải năng lực khoa học.|Chỉ lượng tiền mặt trong ngân sách, không phải năng lực công nghệ.|Chỉ vị trí địa lý, không bao gồm nghiên cứu và công nghệ.
79|Tách phát triển công nghiệp khỏi trang bị lực lượng vũ trang.|Chỉ tăng quân số, không cần nâng cấp vũ khí trang bị.|Ngừng hiện đại hóa đất nước và giữ nguyên trang bị lạc hậu.
83|Chỉ coi trọng QP-AN khi chiến tranh đã xảy ra.|Coi QP-AN là nhiệm vụ thứ yếu, không gắn các nhiệm vụ khác.|Tách hoàn toàn quốc phòng khỏi an ninh.
86|Mục đích duy nhất là xâm lược và mở rộng lãnh thổ.|Mục đích duy nhất là áp đặt quyền thống trị lên nước khác.|Mục đích duy nhất là chạy đua vũ trang phục vụ xâm lược.
87|Vì một nhóm đặc quyền, do một nhóm đặc quyền tiến hành.|Do nước ngoài xây dựng thay, nhân dân không tham gia.|Chỉ phục vụ quân đội, không phục vụ nhân dân.
89|Chỉ nguồn lực đã sử dụng hết, không gồm khả năng huy động.|Chỉ quân số đang trực tiếp chiến đấu, không gồm nguồn lực khác.|Chỉ một loại vũ khí, không gồm nhân lực và tài chính.
99|Không xây dựng khu vực phòng thủ hoặc phân vùng chiến lược.|Chỉ bố trí kinh tế, không gắn thế trận QPTD với ANND.|Tách hoàn toàn thế trận quốc phòng khỏi thế trận an ninh.
100|Không liên quan cơ sở vật chất và kỹ thuật quốc phòng.|Chỉ là yếu tố tinh thần, không cung cấp nguồn lực vật chất.|Là yếu tố phụ thuộc hoàn toàn vào nghi lễ, không tạo sức mạnh tổng hợp.
103|Địch chỉ đối đầu lực lượng không có truyền thống chống ngoại xâm.|Địch tác chiến trên địa hình hoàn toàn đơn giản, không có trở ngại.|Nhân dân không chống ngoại xâm nên địch không gặp sức kháng cự.
111|Quan điểm chỉ tiến hành chiến tranh bằng ngoại lực, bỏ nội lực.|Quan điểm không cần chiến tranh nhân dân trong bảo vệ Tổ quốc.|Quan điểm tách sức mạnh dân tộc khỏi sức mạnh thời đại.
115|Đình chỉ toàn bộ sản xuất để không phải lo đời sống nhân dân.|Chỉ chờ viện trợ, không duy trì sức người sức của trong nước.|Chỉ phục vụ thời gian ngắn, không chuẩn bị kháng chiến lâu dài.
116|Cho phép địch gây bạo loạn bên trong để chỉ đánh bên ngoài.|Chỉ quan tâm tiền tuyến, không cần giữ hậu phương ổn định.|Tách đấu tranh quân sự khỏi an ninh, không xử lý âm mưu phối hợp của địch.
117|Thay toàn bộ nội lực bằng ngoại lực.|Chỉ dùng nội lực và tuyệt đối không tranh thủ ngoại lực.|Chỉ dùng ngoại lực, loại bỏ sức mạnh dân tộc.
128|Chỉ dùng quân số đông hơn và vũ khí nhiều hơn để đánh.|Chỉ đánh trực diện, không dùng mưu kế và thế trận.|Chỉ dựa vào nước ngoài, không dùng sức mạnh tổng hợp trong nước.
131|Chỉ bộ đội chủ lực, không có bộ đội địa phương và dân quân.|Chỉ bộ đội địa phương, không có bộ đội chủ lực và dân quân.|Chỉ dân quân tự vệ, không có bộ đội chủ lực và bộ đội địa phương.
132|Các đối tác tôn trọng chủ quyền và hợp tác bình đẳng với Việt Nam.|Những quốc gia không có âm mưu hoặc hành động xâm lược, chống phá.|Những tổ chức ủng hộ hòa bình và độc lập dân tộc.
133|Giới hạn sức người sức của vào một nhóm, loại bỏ toàn dân.|Không huy động nhân lực hoặc vật lực của nhân dân.|Chỉ tiến hành hoạt động ngoại giao, không tạo thế trận chống địch.
137|Tạo thuận lợi cho địch hoàn thành đánh nhanh, thắng nhanh.|Giúp địch mở rộng không gian và kéo dài khả năng tiến công.|Bỏ qua chiến lược của địch và đình chỉ chuẩn bị tác chiến.
139|Chỉ đánh bên ngoài, không giữ an ninh nội bộ.|Chỉ xử lý nội bộ, không kháng chiến chống địch bên ngoài.|Tách hai nhiệm vụ để không cần phối hợp lực lượng.
145|Nhân dân không có truyền thống yêu nước và đoàn kết.|Mất hoàn toàn vai trò lãnh đạo của Đảng.|Lực lượng vũ trang không cần sự ủng hộ của nhân dân.
151|Thế giới hoàn toàn ổn định, không có cạnh tranh chiến lược.|Các nước lớn không tác động đến môi trường an ninh.|Chỉ có yếu tố khí hậu, không có biến động chính trị quốc tế.
154|Chia đều quyền lãnh đạo cho mọi giai cấp và lực lượng.|Nhường toàn bộ quyền lãnh đạo cho tổ chức nước ngoài.|Chỉ lãnh đạo một số mặt, không giữ quyền lãnh đạo tuyệt đối.
157|Tăng biên chế cồng kềnh, không cần sức chiến đấu.|Tổ chức phân tán, giảm cơ động và khả năng chiến đấu.|Chỉ tăng số lượng, không quan tâm tổ chức và chất lượng.
160|Tách hoàn toàn khỏi công nghiệp hóa và công nghiệp quốc phòng.|Chỉ dựa vào mua sắm nước ngoài, không phát triển công nghiệp trong nước.|Ngừng hiện đại hóa đất nước trong khi hiện đại hóa quân đội.
165|Chỉ kinh doanh, không có nhiệm vụ chiến đấu bảo vệ Tổ quốc.|Chỉ tổ chức nghi lễ, không chuẩn bị sẵn sàng chiến đấu.|Chỉ hoạt động văn hóa, không làm nhiệm vụ bảo vệ Tổ quốc.
166|Chỉ có an ninh truyền thống, không có an ninh phi truyền thống.|Mọi thách thức đã hết, không còn các thế lực chống phá.|Chỉ có an ninh phi truyền thống, không có thách thức truyền thống.
170|Chỉ tăng quân số, không xây dựng chính quy, tinh nhuệ, hiện đại.|Xây dựng QĐND và CAND nhưng giải thể DQTV và DBĐV.|Chỉ hiện đại hóa vũ khí, không xây dựng lực lượng cách mạng.
171|Chỉ tăng quân số, không xây dựng bản chất chính trị.|Tách quân đội khỏi Đảng, Tổ quốc và Nhân dân.|Chỉ huấn luyện thể lực, không xây dựng lòng trung thành.
182|Không cung cấp vật chất, kỹ thuật hoặc tài chính cho QP-AN.|Chỉ cung cấp nghi lễ, không cung cấp trang bị và nhân lực.|Chỉ là hình thức quản lý, không liên quan nguồn lực quốc phòng.
188|Kinh tế không ảnh hưởng tổ chức biên chế và vũ khí kỹ thuật.|Chỉ thời tiết quyết định tổ chức biên chế và trang bị.|Chỉ sở thích cá nhân quyết định biên chế lực lượng vũ trang.
191|Chỉ phục vụ dân sinh, không chuẩn bị chi viện thời chiến.|Chỉ phục vụ chiến tranh, không đáp ứng dân sinh thời bình.|Tách hoàn toàn phát triển vùng trọng điểm khỏi nhu cầu quốc phòng.
192|Chỉ ở miền núi, không áp dụng trên cả nước.|Chỉ trong doanh trại, không áp dụng khu vực dân sự.|Chỉ ở một đô thị, không áp dụng các địa phương khác.
195|Chỉ xây dựng nghi lễ, không phát triển cơ sở vật chất kỹ thuật.|Tách công nghiệp khỏi nhu cầu trang bị lực lượng vũ trang.|Ngừng phát triển công nghiệp quốc phòng và năng lực kỹ thuật.
199|Chỉ liên lạc thời bình, không chuẩn bị thời chiến.|Chỉ liên lạc thời chiến, không bảo đảm thông suốt thời bình.|Không cần an toàn thông tin hoặc tính liên tục của liên lạc.
213|Vị trí hoàn toàn không có ý nghĩa chiến lược.|Chỉ do thời tiết, không liên quan vị trí địa lý và tài nguyên.|Do không có tài nguyên hoặc vị trí quan trọng.
214|Truyền thống dựng nước tách rời hoàn toàn giữ nước.|Chỉ tiếp thu quân sự nước ngoài, không có truyền thống trong nước.|Chỉ phát triển sản xuất, không có lịch sử chống ngoại xâm.
218|Chỉ do thiếu vũ khí, không liên quan lòng dân hoặc đường lối.|Được toàn dân ủng hộ nhưng chỉ thất bại vì thời tiết.|Có đường lối hoàn toàn chủ động và hợp lòng dân, không có yếu kém lãnh đạo.
221|Không cần xác định kẻ thù hoặc đối tượng tác chiến.|Chỉ xác định quân phục, không xác định đối tượng tác chiến.|Chỉ xác định thời tiết, không xác định kẻ thù.
222|Chỉ so sánh quân số, bỏ qua mọi yếu tố khác.|Chỉ so sánh vũ khí, bỏ qua con người và thế trận.|Chỉ dựa vào tài chính, không có mưu kế hoặc tinh thần.
224|Chỉ đánh trận địa quy mô lớn, không đánh du kích.|Chỉ phòng ngự bất động, không có vận động và tiến công.|Chỉ tác chiến hải quân, không có du kích và vận động.
229|Đồng nhất với văn hóa nước ngoài, không có bản sắc riêng.|Chỉ có nghi lễ, không có tinh thần yêu nước và cộng đồng.|Không có truyền thống văn hóa trong quá trình dựng nước giữ nước.
237|Chỉ đánh khi quân số và vũ khí đều vượt trội đối phương.|Chỉ dựa vào lực lượng bên ngoài để thay thế lực lượng trong nước.|Lấy mạnh đánh yếu, không vận dụng mưu kế khi lực lượng nhỏ hơn.
240|Chỉ dùng quân số đông hơn, không cần mưu trí.|Đánh vào chỗ mạnh đã được địch chuẩn bị, không tạo bất ngờ.|Chỉ đối đầu trực diện, không lừa địch hoặc chọn chỗ yếu.
241|Không dàn xếp thế trận, chỉ chờ địch quyết định mọi hành động.|Không tạo bẫy, để địch tự do làm theo ý muốn.|Chỉ tăng quân số, không buộc địch hành động theo ý định của ta.
246|Chỉ sao chép cách đánh nước ngoài, không có truyền thống dân tộc.|Truyền thống kinh doanh, không liên quan lịch sử giữ nước.|Chỉ điều kiện thời tiết, không có yêu nước và đoàn kết.
247|Mỹ là lực lượng không tham gia chiến tranh xâm lược Việt Nam.|Mỹ không phải kẻ thù trực tiếp trong cuộc chiến tranh đó.|Chỉ một thế lực khác là kẻ thù trực tiếp, không phải Mỹ.
249|Củng cố hàng ngũ địch để tăng sức chống đối.|Chỉ dùng pháo kích, không tác động tư tưởng binh lính địch.|Làm tăng tổn thất của ta và củng cố ý chí địch.
250|Mọi phần của Trái Đất đều thuộc một quốc gia duy nhất.|Chỉ vùng đặc quyền kinh tế, không có phần đất và vùng trời.|Phần lãnh thổ do quốc gia khác làm chủ hoàn toàn.
253|Chỉ sự nghiệp phát triển thương mại, không thuộc bảo vệ Tổ quốc.|Chỉ công việc của doanh nghiệp tư nhân, không phải sự nghiệp quốc gia.|Chỉ hoạt động văn hóa, không thuộc xây dựng và bảo vệ Tổ quốc.
257|Quyền của quốc gia khác quản lý lãnh thổ của mình.|Quyền chỉ quyết định ngoài lãnh thổ, không làm chủ trong lãnh thổ.|Quyền làm chủ hoàn toàn phụ thuộc nước ngoài.
260|Chỉ có quyền lập pháp, không có hành pháp và tư pháp.|Chỉ có quyền hành pháp, không có lập pháp và tư pháp.|Chỉ có quyền tư pháp, không có lập pháp và hành pháp.
262|Cho phép quốc gia khác can thiệp toàn bộ quyền tối cao.|Chỉ giữ hình dạng lãnh thổ, không bảo vệ quyền của Nhà nước.|Từ bỏ toàn vẹn lãnh thổ khi có tranh chấp.
264|Chỉ xác lập lập pháp, bỏ hành pháp và tư pháp.|Chỉ xác lập hành pháp, bỏ lập pháp và tư pháp.|Chỉ xác lập tư pháp, bỏ lập pháp và hành pháp.
270|Chỉ bảo vệ mốc giới, không bảo vệ tài nguyên hay lợi ích quốc gia.|Chỉ khai thác tài nguyên, không bảo vệ toàn vẹn lãnh thổ.|Chỉ bảo vệ môi trường, không bảo vệ chủ quyền và lợi ích quốc gia.
272|Nguyên tắc tự do giao thương, không liên quan chủ quyền.|Nguyên tắc trao đổi văn hóa, không liên quan toàn vẹn lãnh thổ.|Nguyên tắc quản lý khí hậu, không liên quan quyền lãnh thổ.
273|Quan điểm tạm thời, không phù hợp lợi ích quốc gia.|Quan điểm từ bỏ chủ quyền để tránh mọi tranh chấp.|Quan điểm dùng vũ lực làm biện pháp duy nhất.
294|Chỉ bảo vệ một doanh nghiệp, không bảo vệ chính quyền và nhân dân.|Chỉ thực hiện đối ngoại, không bảo vệ cơ sở.|Chỉ tổ chức nghi lễ, không bảo vệ tính mạng và tài sản nhân dân.
295|Chỉ coi trọng số lượng, không coi trọng chất lượng.|Xây dựng hạn chế trong một điểm, không rộng khắp.|Chỉ tăng quân số, không cần xây dựng vững mạnh.
298|Coi trọng số lượng là duy nhất, không cần chất lượng.|Chỉ đầu tư quân phục, không cần chất lượng lực lượng.|Chỉ mở rộng biên chế, không cần huấn luyện hoặc chất lượng.
303|Quan điểm chỉ tăng số lượng, bỏ chất lượng DBĐV.|Nhiệm vụ chỉ xây dựng một mặt, không xây dựng toàn diện.|Quan điểm xây dựng DBĐV không có trọng tâm, trọng điểm.
305|Chỉ ngân sách của từng gia đình quân nhân dự bị.|Chỉ nguồn tiền tự phát từ tổ chức nước ngoài.|Chỉ tài chính cá nhân người chỉ huy, không có ngân sách nhà nước.
306|Không tạo nguồn, chỉ huy động ngẫu nhiên khi cần.|Tạo nguồn nhưng không đăng ký và quản lý.|Đăng ký nhưng không tạo nguồn hoặc quản lý lực lượng.
307|Chỉ các vật dụng không có khả năng phục vụ nhiệm vụ kỹ thuật.|Chỉ đồ trang trí, không có phương tiện vận tải và liên lạc.|Chỉ hàng tiêu dùng cá nhân, không có phương tiện và thiết bị cần thiết.
308|Chỉ tăng biên chế, không cần vững mạnh hoặc sẵn sàng chiến đấu.|Để lực lượng tự hoạt động không có mục tiêu xây dựng.|Giảm khả năng sẵn sàng chiến đấu để chỉ phục vụ nghi lễ.
312|Chỉ lực lượng ở đô thị nội địa, không chú trọng biển hay địa bàn trọng điểm.|Chỉ lực lượng ở cơ quan hành chính, bỏ địa bàn trọng điểm.|Không xây dựng DQTV biển và không quan tâm địa bàn trọng điểm.
317|Tách DBĐV khỏi sự lãnh đạo của Đảng.|Chỉ đủ số lượng, không cần chất lượng cao.|Chỉ có chất lượng, không cần bảo đảm số lượng cần thiết.
319|Chỉ mục đích xâm lược, không phải biện pháp xây dựng lực lượng.|Chỉ tiêu về chiều rộng lãnh hải.|Khái niệm thời hạn nghĩa vụ dân quân thường trực.
322|Mục đích cuối cùng, không phải đặc điểm về cách tham gia.|Chỉ tiêu ngân sách, không phải đặc điểm phong trào.|Thời điểm kỷ niệm, không phải đặc điểm phong trào.
327|Biện pháp kỹ thuật thuần túy, không phải quan điểm chỉ đạo.|Chỉ tiêu quân số, không phải quan điểm chỉ đạo.|Thủ tục tuyển dụng nhân sự, không phải quan điểm chỉ đạo.
330|Chỉ đăng ký ngân sách, không có tuyên truyền vận động.|Chỉ huấn luyện vũ khí, không có tuyên truyền vận động.|Chỉ quy hoạch đường sá, không có tuyên truyền vận động.
333|Chỉ bố trí biên chế, không phải tuyên truyền giáo dục.|Chỉ quản lý tài sản, không sử dụng truyền thông hoặc văn hóa.|Chỉ tuyển quân, không thực hiện giáo dục quần chúng.
337|Không có vai trò đối với thế trận an ninh nhân dân.|Chỉ thay thế hoàn toàn công an, không xây dựng thế trận.|Chỉ hoạt động giải trí, không có ý nghĩa an ninh.
338|Chỉ huy động quân đội, không huy động quần chúng.|Chỉ phục vụ kinh doanh, không bảo vệ an ninh trật tự.|Tách nhân dân khỏi công tác an ninh ở cơ sở.
343|Không vận động nhân dân tham gia phòng ngừa hoặc tố giác.|Chỉ chờ tội phạm tự khai báo, không phát hiện.|Che giấu tội phạm và ngăn nhân dân tố giác.
344|Không xây dựng mô hình quần chúng tự quản.|Chỉ nhân rộng mô hình kinh doanh, không liên quan an ninh trật tự.|Tách mọi tổ chức quần chúng khỏi hoạt động tự quản an ninh.
347|Chỉ bảo vệ thị trường hàng hóa, không bảo vệ lãnh thổ.|Chỉ bảo vệ văn hóa, không bảo vệ biên giới vùng trời vùng biển.|Cho phép xâm phạm chủ quyền lãnh thổ khi có sức ép bên ngoài.
348|Diễn ra đơn giản, công khai hoàn toàn và kết thúc tức thời.|Chỉ diễn ra một lần, không mang tính lâu dài.|Không có tính phức tạp và không gắn vấn đề giai cấp.
352|Chỉ ghi nhận hoạt động xâm phạm, không phòng ngừa hoặc ngăn chặn.|Chỉ phát hiện, không đấu tranh làm thất bại sự xâm phạm.|Cho phép các hoạt động xâm phạm an ninh tiếp tục.
354|Chỉ những sự kiện chắc chắn đã gây hậu quả, không gồm khả năng đe dọa.|Chỉ nhân tố bên ngoài, tuyệt đối không có nhân tố bên trong.|Chỉ nhân tố bên trong, tuyệt đối không có nhân tố bên ngoài.
358|Cấm hoàn toàn quyền tự do tín ngưỡng và tôn giáo.|Bỏ qua mọi hành vi lợi dụng tôn giáo để phá hoại.|Chỉ quản lý nghi lễ, không bảo vệ chính sách và quyền tín ngưỡng.
359|Chỉ bảo vệ cảnh quan, không bảo vệ nền tảng tư tưởng.|Chỉ bảo vệ thương mại, không bảo vệ truyền thống văn hóa.|Từ bỏ nền tảng tư tưởng và truyền thống văn hóa dân tộc.
360|Chỉ bảo vệ trật tự ở đô thị nội địa, không ở biên giới.|Chỉ bảo vệ biên giới đất liền, không có biên giới biển.|Chỉ bảo vệ biên giới biển, không có biên giới đất liền.
361|Những ai tôn trọng độc lập và hợp tác bình đẳng với Việt Nam.|Chỉ người khác quốc tịch, bất kể có hành động chống phá hay không.|Chỉ tổ chức kinh tế, không xét âm mưu và hành động chống phá.
364|Chỉ tài nguyên thiên nhiên, không có Đảng và Nhà nước.|Chỉ giao thông đường bộ, không có cán bộ đảng viên.|Chỉ hoạt động thể thao, không có bí mật nhà nước.
374|Tách khỏi sự lãnh đạo của Đảng và quản lý của Nhà nước.|Chỉ do doanh nghiệp nước ngoài quyết định.|Tự phát, không cần chủ thể lãnh đạo hoặc quản lý.
375|Hai lĩnh vực độc lập, không tác động qua lại.|TTATXH quyết định ANQG, ANQG không có vai trò quyết định.|Chỉ ANQG tác động, TTATXH không tạo tiền đề ổn định.
379|Chỉ hoạt động kinh doanh, không phải nguyên tắc chỉ đạo.|Chỉ thủ tục tài chính, không phải quan điểm lãnh đạo.|Quan điểm tách hoàn toàn vai trò của Đảng khỏi ANQG và TTATXH.
382|Những người chấp hành pháp luật, không xâm phạm an ninh.|Các đối tác tôn trọng độc lập, chủ quyền và hợp tác bình đẳng.|Các tổ chức bảo vệ hòa bình, không có hành động chống phá.
383|Tổ chức và cá nhân chấp hành pháp luật, không chống đối.|Những người hợp tác xây dựng đất nước và bảo vệ chính quyền.|Những tổ chức hoạt động hợp pháp không có âm mưu lật đổ.
386|Chỉ là nghĩa vụ của quân nhân, không thuộc mọi công dân.|Chỉ là quyền tự chọn, không gắn nghĩa vụ công dân.|Chỉ là trách nhiệm của cơ quan quản lý, không thuộc nhân dân.
`;
for(let line of EXTRA.trim().split('\n')){let [id,...a]=line.split('|');EXACT[id]=a}
